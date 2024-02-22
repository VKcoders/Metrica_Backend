const path = "../Assets/";

const icons = {
     arrow: require(path + "arrow.png"),
     add: require(path + "add.png"),
     avatar: require(path + "avatar.png"),
     status: {
          done: require(path + "done.png"),
          warning: require(path + "warning.png"),
          atention: require(path + "atention.png")
     },
     lock: {
          open: require(path + "lock-open.png"),
          close: require(path + "lock-close.png")
     },
     background: {
          1: require(path + "bg-01.png"),
          2: require(path + "bg-02.png"),
     },
     tab: {
          Home: require(path + "home.png"),
          Historic: require(path + "historic.png"),
          Remainder: require(path + "remainder.png"),
          Announcement: require(path + "announcement.png"),
          Report: require(path + "report.png")
     }
};

module.exports = icons;
