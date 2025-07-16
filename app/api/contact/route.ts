// app/api/contact/route.ts
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    // JSONとしてリクエストボディを取得
    const body = await req.json()
    const { name, email, dates, purpose, message } = body

    // 入力値のバリデーション
    const errors: string[] = []

    if (!name || !name.trim()) errors.push("名前は必須です")
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("メールアドレスが無効です")
    if (!purpose) errors.push("訪問目的は必須です")
    if (purpose === "other" && (!message || !message.trim())) {
        errors.push("訪問目的が「その他」の場合はメッセージが必要です")
    }

    if (errors.length > 0) {
        return NextResponse.json({ errors }, { status: 400 })
    }

    // プルダウンの値を人間が読める表現に変換
    const purposeMap: Record<string, string> = {
        "city-guide": "都市ガイド",
        "night-food": "レストラン案内",
        "recommended-spots": "おすすめの場所紹介",
        "other": "その他（自由記述）",
    }

    // 日本時間で送信日時を取得
    const dateJST = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })

    // IPアドレスの取得（CloudflareやVercelなどのReverse Proxy経由で変わることに注意）
    const ip = req.headers.get("x-forwarded-for") || "不明"

    // ユーザーの端末情報（必要なら）
    const userAgent = req.headers.get("user-agent") || "不明"

    // Slackに送るメッセージ本文を作成
    const text = `📩 *新しいお問い合わせ* 📩

👤 *名前:* ${name}
📧 *メール:* ${email}
🎯 *訪問目的:* ${purposeMap[purpose] || "未指定"}
📅 *希望日:* ${dates?.trim() || "指定なし"}
📝 *メッセージ:* ${message?.trim() || "（メッセージなし）"}
🕒 *送信日時:* ${dateJST}
🌐 *IPアドレス:* ${ip}
🖥️ *User-Agent:* ${userAgent}`
    try {
        // SlackのWebhookへPOSTリクエストを送信
        const res = await fetch(process.env.SLACK_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    })

    if (!res.ok) {
        console.error("Slack通知に失敗しました")
        return NextResponse.json({ error: "Slack notification failed" }, { status: 500 })
    }

    return NextResponse.json({ message: "Success" })
    } catch (error) {
        console.error("Slack送信中のエラー:", error)
        return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
}
