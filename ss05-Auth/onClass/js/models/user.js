export async function register(name, email, password) {
  /*
    Xử lí bất đồng bộ: chuyển đoạn code chạy bất đồng bộ (song song) => về đồng bộ (tuần tự)
    3 cách:
    * callback: cũ, callback hell.
    ** promise: hiện nay
    *** async/ await: phát triển từ promise, code mạch lạc hơn.
    Chỗ nào có promise (dạng giống promise) => dùng await; function nào có await => khai báo function phải có async
   */

  let response = await auth.createUserWithEmailAndPassword(email, password);
  console.log(response); // -> Promise {<pending>}
  console.log("Successful");
  console.log(auth.currentUser);
}

export function login(email, password) {}

export function getCurrentUser() {}

export function updateUser() {}

export function logout() {}
