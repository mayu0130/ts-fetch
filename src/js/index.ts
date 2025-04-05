import { appendUserList, fetchUserList } from "./user";
import { getElementById } from "./utils/dom";

document.addEventListener("DOMContentLoaded", () => {
  const userButton = getElementById("fetch-use");
  userButton.addEventListener("click", async () => {
    //APIからユーザーの一覧を取得
    const userList = await fetchUserList();
    console.log(userList);
    //ユーザー一覧のDOMに出力
    appendUserList(userList);
  });
});