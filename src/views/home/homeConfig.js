class config {
  constructor() {
    this.settingsPromotion = {
      itemsToShow: 4,
      wrapAround: true,
      snapAlign: "start",
    };
    this.breakpointsPromotion = {
      300: {
        itemsToShow: 1,
      },
      956: {
        itemsToShow: 2,
      },
      // 1024 and up
      1225: {
        itemsToShow: 3,
      },
      1476: {
        itemsToShow: 4,
      },
    };
    this.settingSliderBar  = {
        itemsToShow : 1,
        breakpoints : "breakpoints",
        wrapAround : "true",
        autoplay : 5000,
        pauseAutoplayOnHover : true,
    },
    this.dataSliders =[
        "https://res.cloudinary.com/dqywrcgrr/image/upload/v1679152826/%E1%BA%A3nh/slider-1_wpbt7j.webp",
        "https://res.cloudinary.com/dqywrcgrr/image/upload/v1679152826/%E1%BA%A3nh/slider-2_twg6sx.webp",
        "https://res.cloudinary.com/dqywrcgrr/image/upload/v1679152827/%E1%BA%A3nh/slider-3_hdirii.webp",
        "https://res.cloudinary.com/dqywrcgrr/image/upload/v1679152826/%E1%BA%A3nh/slider-4_hzu9iy.webp",
      ];
    this.products = [
        {
          title:
            "Đồ chơi nhồi bông máy bay1",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 2",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 3",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },{
          title:
            "Đồ chơi nhồi bông máy bay1",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 2",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 3",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },{
          title:
            "Đồ chơi nhồi bông máy bay1",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 2",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 3",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
      ];
      this.breakpointsProducts = { 
        0 :{
        itemsToShow: 1,
        },
        747 :{
          itemsToShow: 2,
        },
        975 :{
          itemsToShow: 3,
        },
        // 1024 and up
        1200: {
          itemsToShow: 4,
        },
        1406: {
          itemsToShow: 5,
        },
      };
    this.settingsProduct = {
        itemsToShow: 5,
        wrapAround: true,
        snapAlign: "start",
    }
  }
}
export default config;
