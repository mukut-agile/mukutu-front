import { gapi } from "gapi-script";

export let GoogleAuth = "";
export let CalendarId = "";

const SCOPE = "https://www.googleapis.com/auth/calendar";

export const handleClientLoad = () => {
  gapi.load("client: auth2", initClient);
};

const initClient = () => {
  console.log("!!!!!!!");

  const discoveryUrl =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

  gapi.client
    .init({
      apiKey: "AIzaSyCI7yO2h6aUBpQsDCWhuZV3Dq0r3fTUMVc",
      clientId:
        "194471905564-vqf5t1bn4357ga01tkvnfn4n1u2fcpkh.apps.googleusercontent.com",
      discoveryDocs: [discoveryUrl],
      scope: SCOPE
    })
    .then(() => {
      GoogleAuth = gapi.auth2.getAuthInstance();

      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      console.log(GoogleAuth);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      let user = GoogleAuth.currentUser.get();
      setSigninStatus();
    });
};

export const handleAuthClick = () => {
  if (GoogleAuth.isSignedIn.get()) {
    GoogleAuth.signOut();
  } else {
    GoogleAuth.signIn();
  }
};

export const handleAuthClickAndEvents = async () => {
  if (GoogleAuth.isSignedIn.get()) {
    GoogleAuth.signOut();
  } else {
    await GoogleAuth.signIn();
    handleEvents();
  }
};

export const handleEvents = () => {

  gapi.client.load("calendar", "v3", function() {
    var request = gapi.client.calendar.events.list({
      // メソッド
      calendarId: 'primary' // 取得したカレンダーID(または'primary')
    });
    console.log(CalendarId);
    // リクエスト実行
    request.execute(function(resp) {
      console.debug(resp);
      for (var i in resp.items) {
        // 予定開始日時/終了日時とイベントIDを表示
        var a = resp.items[i];
        fetch("https://mukut-back.herokuapp.com/api/v1/schedules", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(a) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
        });
        console.log(JSON.stringify(a));
      }
    });
  });
};

export const handleCalendarId = () => {
  gapi.client.load("calendar", "v3", function() {
    // リクエストメソッド設定(パラメータなし)
    var request = gapi.client.calendar.calendarList.list();
    // リクエスト実行
    request.execute(function(resp) {
      console.log(resp);
      CalendarId = resp.items[0].id;
    });
  });
};

export const revokeAccess = () => {
  GoogleAuth.disconnect();
};

const setSigninStatus = isSignedIn => {
  const user = GoogleAuth.currentUser.get();
  const isAuthorized = user.hasGrantedScopes(SCOPE);
  if (isAuthorized) {
    return "signin";
  } else {
    return "signout";
  }
};

const updateSigninStatus = isSignedIn => {
  setSigninStatus();
};
