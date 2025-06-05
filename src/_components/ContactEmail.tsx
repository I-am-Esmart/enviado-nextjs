// src/emails/ContactEmail.tsx
type Props = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({ name, email, message }: Props) {
  return (
    <div>
      <h2>New Contact Form Submission</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
