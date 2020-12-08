class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      let req = await fetch(url);
      return await req.json()
    }catch (e) {
      console.log("http get error", e);
      throw Error(e);
    }
  }

  post = async (url, body) => {
    try {
      let req = await fetch(url, {method: "POST", body});
      return await req.json()
    }catch (e) {
      console.log("http post error", e);
      throw Error(e);
    }
  }
}

export default Http
