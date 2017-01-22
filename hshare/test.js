/**
 * Created by Obscurity on 2017/1/22.
 */

$("#container").hshare({
    size: "large",
    copyLink: true,
    platforms: [{
        name: "kaixin"
    }, {
        name: "pengyou"
    }, {
        name: "qzone"
    }, {
        name: "tieba"
    }, {
        name: "douban"
    }, {
        name: "qq"
    }, {
        name: "renren"
    }, {
        name: "sinaweibo"
    }, {
        name: "wechat"
    }, {
        name: "renminweibo"
    }, {
        name: "hexunweibo"
    }, {
        name: "tianya"
    }, {
        name: "reddit"
    }]
});

$("#container2").hshare({
    size: "medium",
    copyLink: false,
    print: true
});