import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Solo permitimos peticiones POST (cuando el usuario envía el formulario)
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Solo se permiten peticiones POST" });
  }

  // Extraemos los datos que nos envía el formulario
  const { nombre, email, empresa, asunto, mensaje, servicio } = req.body;

  // 1. Configuramos el "transportador" de correo con las variables de entorno
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true para el puerto 465, false para otros
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 2. Construimos el correo que te llegará a ti
    await transporter.sendMail({
      from: `"Agencia Contacto" <${process.env.EMAIL_USER}>`,
      to: "info@tuwebencadiz.es", // A dónde llegará el aviso
      replyTo: email,
      subject: `Nuevo mensaje de la web: ${asunto || servicio || 'Contacto general'}`,
      html: `
        <h2>Nuevo contacto desde la web (${asunto || servicio || 'Contacto general'})</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
        ${asunto ? `<p><strong>Asunto:</strong> ${asunto}</p>` : ''}
        ${servicio ? `<p><strong>Servicio:</strong> ${servicio}</p>` : ''}
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje ? mensaje.replace(/\n/g, '<br>') : 'Sin mensaje detallado.'}</p>
      `,
    });

    // 3. Respondemos al formulario diciendo que todo ha ido bien
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return res.status(500).json({ error: "Hubo un error al enviar el mensaje" });
  }
}
