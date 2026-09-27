export default function SpendWise() {
  return (
    <main
      style={{
        padding: "1.5rem",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <h1>Privacy Policy for SpendWise</h1>
      <p>
        <strong>Effective Date:</strong> 27 September 2026
      </p>
      <p>
        SpendWise is a personal finance app developed by Shafqat Ullah Khan
        ("we", "us", or "our"). This policy explains how the app handles your
        information. SpendWise works offline for everyday use. Your financial
        records stay on your device unless you use optional cloud backup,
        export, sharing, or printing features, or your device backs up app data.
      </p>

      <h2>1. Information You Store in the App</h2>
      <p>
        SpendWise stores the information you enter or import locally on your
        device. This includes accounts and balances, income, expenses,
        transfers, categories, budgets and budget history, transaction dates,
        notes and item breakdowns, and receipt images you attach. It also stores
        your optional display name, currency and appearance preferences,
        calculator inputs, and app settings.
      </p>
      <p>
        This information is used to provide transaction tracking, balances,
        budgeting, calculations, financial summaries, and reports. SpendWise
        does not connect to your bank or require banking passwords or card
        credentials. You do not need to create an account with us to use these
        features. We do not operate a server that receives your financial
        records.
      </p>

      <h2>2. Camera, Photos, and Files</h2>
      <p>
        If you choose to photograph a receipt, SpendWise requests camera
        permission. If you select receipt photos, the app copies the selected
        images into its local storage. File pickers let you choose backups to
        restore and locations for saved exports. Camera and photo features are
        optional, and you can manage permissions in your device settings.
        Receipt images may be included in backups when you enable that option.
      </p>

      <h2>3. Optional Google Sign-In and Google Drive Backup</h2>
      <p>
        If you connect a Google account, SpendWise receives your Google account
        identifier and, when available, your name, email address, profile image
        URL, and granted permissions. Account details are stored on your device
        to identify the connected account. Google authentication tokens are used
        to authorize backup and restore requests; we do not receive your Google
        password.
      </p>
      <p>
        SpendWise requests access to its own hidden application data folder in
        your Google Drive using the drive.appdata permission. This does not
        grant access to your ordinary Drive documents. The app uploads and
        restores backup archives directly between your device and Google Drive.
        Archives contain financial records, portable preferences (including your
        display name and calculator inputs), and receipt images if included.
        Backup metadata includes timestamps, file sizes, app version, and record
        counts. Google sign-in credentials and biometric enrollment are not
        included in these backup archives.
      </p>
      <p>
        Google account information and Drive access are used only to provide the
        sign-in, backup, and restore features you choose. We do not sell this
        information or use it for advertising. Our handling of information
        obtained through Google APIs follows the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </a>
        , including its Limited Use requirements.
      </p>
      <p>
        Google processes information when you use its services under the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
        You can disconnect your account in SpendWise and revoke access through
        your Google Account connections settings. Disconnecting or revoking
        access does not itself delete previously uploaded backups.
      </p>

      <h2>4. Local Backups, Exports, Sharing, and Printing</h2>
      <p>
        You can create local backup archives and export financial information as
        PDF or CSV files. If you save, share, or print a file, its contents are
        passed to the destination, app, service, or printer you select. Those
        destinations handle information according to their own privacy
        practices. Exported files and backups can contain sensitive financial
        information, so choose their destinations carefully.
      </p>
      <p>
        Local backups can be password protected when you select that option.
        Backups created without a password, including the current Google Drive
        backup archives and automatic safety backups, are not encrypted by
        SpendWise. Google Drive transfers use HTTPS.
      </p>

      <h2>5. Biometrics and Device Security</h2>
      <p>
        If you enable biometric app locking, authentication is handled by your
        device operating system. SpendWise receives the authentication result;
        it does not receive or store your fingerprint, face data, or device
        passcode. App locking and the optional privacy shield help protect
        access to the app, but do not encrypt exported files or backups. Local
        app data relies on your device&apos;s storage protections.
      </p>

      <h2>6. Advertising, Tracking, and Sharing</h2>
      <p>
        SpendWise does not include advertising SDKs, behavioral tracking, or
        third-party usage analytics. The app&apos;s financial analytics are
        calculated from your records on your device. We do not sell or rent your
        personal information. Data leaves the app through the optional services
        and actions described in this policy, such as Google Drive backup and
        sharing a report.
      </p>
      <p>
        Your operating system, app store, and any services you choose may
        independently process diagnostic, account, or device-backup information
        under their own settings and privacy policies.
      </p>

      <h2>7. Data Retention and Deletion</h2>
      <p>
        Your records remain in local app storage until you delete them or remove
        the app&apos;s data. You can edit or delete records in SpendWise. The
        Clear All Data action resets financial records and creates a local
        safety backup first; it does not erase all saved preferences, existing
        backups, or files you previously exported. To remove those copies,
        delete local snapshots, including safety backups, from the backup
        screen, and delete exported files from their saved locations.
      </p>
      <p>
        Uninstalling the app or clearing its storage through device settings
        removes its local app data, subject to your operating system&apos;s
        backup and restore behavior. Copies in device backups, Google Drive,
        shared destinations, or exported files must be managed separately.
        Deleting a record locally does not remove it from an older backup.
      </p>
      <p>
        After a cloud upload, SpendWise attempts to keep the three newest Drive
        backups and delete older ones. If cleanup fails, older copies may
        remain. To remove all cloud copies, delete SpendWise&apos;s hidden app
        data through Google Drive&apos;s app-management settings. See{" "}
        <a href="https://developers.google.com/workspace/drive/api/guides/appdata">
          Google&apos;s information about application data
        </a>
        . Disconnect SpendWise if you do not want further access. We cannot
        directly access or delete records stored on your device or in your
        personal Drive account.
      </p>

      <h2>8. Contact and Support</h2>
      <p>
        If you email us, we receive your email address and the information you
        choose to include, and use it to respond to your request. Please avoid
        sending financial records or backups unless they are needed for your
        support request. You can contact us about this policy or ask us to
        delete support correspondence using the address below.
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:iamshafqatkhan@gmail.com">iamshafqatkhan@gmail.com</a>
        <br />
        <strong>Developer Name:</strong> Shafqat Ullah Khan
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        SpendWise is not directed to children under 13. We do not knowingly
        collect personal information from children through our support channels.
        If you believe a child has sent us personal information, please contact
        us so we can address it.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this policy as the app changes. Updates will be posted on
        this page with a revised effective date.
      </p>
    </main>
  );
}
