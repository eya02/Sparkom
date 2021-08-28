import SetOptions from "./SetOptions";

const AccountSettings = () => {
  return (
    <form>
      <div className="row">
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating is-select"></div>
        </div>
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <SetOptions
            title="Notifications Sound"
            description=" A sound will be played each time you receive a new activity
notification"
          />

          <SetOptions
            title="Notifications Email"
            description="  We’ll send you an email to your account each time you
      receive a new activity notification"
          />
          <SetOptions
            title="Friend’s Birthdays"
            description="Choose wheather or not receive notifications about your
      friend’s birthdays on your newsfeed"
          />

          <SetOptions
            title="Chat Message Sound"
            description="A sound will be played each time you receive a new message
      on an inactive chat window"
          />
          <SetOptions
            title="Account Privacy"
            description="Public account or Private visible only for Friends"
          />
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button
            type="restore"
            className="btn btn-secondary btn-lg full-width"
          >
            Restore all Attributes
          </button>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button type="submit" className="btn btn-primary btn-lg full-width">
            Save all Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountSettings;
