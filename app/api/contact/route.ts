import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "boradenizbas1@gmail.com",
            subject: 'trabbel',
            html: `
                <h2>Trabbel test</h2>
                <p> ${name}</p>
                <p> ${email}</p>
                <p> ${message}</p>
            `
        });
    } catch (error) {

    }
}