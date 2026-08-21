export default function Amply() {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Privacy Policy for Amply</h1>
      <p>
        <strong>Effective Date:</strong> 21 August 2026
      </p>

      <h2>1. Information Collection and Use</h2>
      <p>
        Amply is designed with your privacy in mind. We do not collect, store,
        or transmit any personal data. The app reads battery information
        (charging/discharging current, battery level, voltage, temperature,
        health, and charging status) directly from your device using standard
        Android system APIs. These readings are displayed to you in real time
        and are not recorded, logged, or sent anywhere. We do not use any
        analytics tools, tracking software, or third-party advertising services.
      </p>

      <h2>2. Personal Information</h2>
      <p>
        Amply does not ask for, access, or process any personal information. The
        app requires no account, no sign-in, and no personal details of any
        kind.
      </p>

      <h2>3. Local Data Storage</h2>
      <p>
        The only data Amply stores are your app preferences (such as the refresh
        interval, temperature unit, and notification setting). These are saved
        locally on your device and never leave it. If you uninstall the app,
        these preferences are permanently deleted.
      </p>

      <h2>4. No Internet or Cloud Services</h2>
      <p>
        Amply works completely offline and does not request the Internet
        permission at all. It is technically incapable of transmitting, sharing,
        or uploading any data to external servers.
      </p>

      <h2>5. Permissions</h2>
      <p>
        Amply requests the notification permission solely to display an
        optional, user-enabled live readout of your battery current as an
        ongoing notification, and uses a foreground service to keep that readout
        updated. This can be turned off at any time from the app's settings or
        the notification itself.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions or concerns about your privacy while using
        Amply, please contact us at:
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:iamshafqatkhan@gmail.com">iamshafqatkhan@gmail.com</a>
        <br />
        <strong>Developer Name:</strong> Shafqat Ullah Khan
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted here with an updated effective date.
      </p>
    </div>
  );
}
