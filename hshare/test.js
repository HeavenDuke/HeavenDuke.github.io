/**
 * Created by Obscurity on 2017/1/21.
 */

$("#container").hshare({
    size: "large",
    hasText: true,
    shares: [{
        platform: "qzone",
        icon: "https://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png",
        text: "分享到QQ空间"
    }, {
        platform: "douban",
        icon: "https://img3.doubanio.com/pics/fw2douban_s.png",
        text: "豆瓣"
    }]
});