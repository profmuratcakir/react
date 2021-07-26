export const reducer = (state, action) => {
  switch (action.type) {
    case "GETIR_BASLA":
      return { ...state, resim: "", hata: "", yukleniyor: true };
    case "GETIR_BASARILI":
      return { ...state, resim: action.payload, hata: "", yukleniyor: false };
    case "GETIR_HATA":
      return { ...state, resim: "", hata: action.payload, yukleniyor: false };
  }
};
