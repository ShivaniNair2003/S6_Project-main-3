import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Set up the sender and receiver email addresses
sender_email = "shivanilekshmiux@gmail.com"
receiver_email = "sivanilr03@gmail.com"

# Set up the SMTP server
smtp_server = "smtp.gmail.com"
smtp_port = 587
smtp_username = "shivaninairlekshmi@gmail.com"
smtp_password = ""

# Create the email message
msg = MIMEMultipart()
msg["From"] = sender_email
msg["To"] = receiver_email
msg["Subject"] = "Test email from Python"
message = "DId you get the message?"
msg.attach(MIMEText(message, "plain"))

# Send the email
server = smtplib.SMTP(smtp_server, smtp_port)
server.starttls()
server.login(smtp_username, smtp_password)
text = msg.as_string()
server.sendmail(sender_email, receiver_email, text)
server.quit()
