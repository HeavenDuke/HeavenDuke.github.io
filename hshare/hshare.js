/**
 * Created by Obscurity on 2017/1/21.
 */

(function ($) {

    var hShare = function (options) {
        var platforms = {
            qzone: {
                name: "qzone",
                template: "<a class='#{css}' href='#{apiLink}?url=#{url}&title=#{title}' target='_blank'  title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}' />#{text}</a>",
                default: true,
                params: {
                    apiLink: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                    icon: "https://heavenduke.github.io/hshare/icons/qzone.png",
                    text: "QQ空间",
                    hint: "分享到QQ空间"
                }
            },
            qq: {
                name: "qq",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: true,
                params: {
                    apiLink: "http://connect.qq.com/widget/shareqq/index.html",
                    icon: "https://heavenduke.github.io/hshare/icons/qq.png",
                    text: "QQ好友",
                    hint: "发送给QQ好友"
                }
            },
            wechat: {
                name: "wechat",
                template: "<a class='#{css}' href='#{apiLink}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}' />#{text}</a>",
                default: true,
                params: {
                    apiLink: "https://cli.im/api/qrcode",
                    icon: "https://heavenduke.github.io/hshare/icons/wechat.png",
                    text: "微信",
                    hint: "分享到微信"
                }
            },
            sinaweibo: {
                name: "sinaweibo",
                template: "<a class='#{css}' href='#{apiLink}?url=#{url}&title=#{title}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: true,
                params: {
                    apiLink: "http://v.t.sina.com.cn/share/share.php",
                    icon: "https://heavenduke.github.io/hshare/icons/sina.png",
                    text: "新浪微博",
                    hint: "分享到新浪微博"
                }
            },
            douban: {
                name: "douban",
                template: "<a class='#{css}'  href='#{apiLink}?url=#{url}&title=#{title}' target='_blank'  title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}' />#{text}</a>",
                default: true,
                params: {
                    apiLink: "http://www.douban.com/recommend/",
                    icon: "https://heavenduke.github.io/hshare/icons/douban.png",
                    text: "豆瓣",
                    hint: "推荐到豆瓣"
                }
            },
            renren: {
                name: "renren",
                template: "<a class='#{css}' href='#{apiLink}?resourceUrl=#{url}&srcUrl=#{url}&title=#{title}' target='_blank' title='#{hint}'><img align='top' alt='#{hint}' src='#{icon}' />#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://widget.renren.com/dialog/share",
                    icon: "https://heavenduke.github.io/hshare/icons/renren.png",
                    text: "人人网",
                    hint: "分享到人人网"
                }
            },
            kaixin: {
                name: "kaixin",
                template: "<a class='#{css}' href='#{apiLink}?rtitle=#{title}&rurl=#{url}' target='_blank' title='#{hint}'><img align='top' alt='#{hint}' src='#{icon}' />#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://www.kaixin001.com/repaste/share.php",
                    icon: "https://heavenduke.github.io/hshare/icons/kaixin.png",
                    text: "开心网",
                    hint: "分享到开心网"
                }
            },
            pengyou: {
                name: "pengyou",
                template: "<a class='#{css}' href='#{apiLink}?to=pengyou&url=#{url}&title=#{title}' target='_blank'  title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}' />#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                    icon: "https://heavenduke.github.io/hshare/icons/pengyou.png",
                    text: "朋友网",
                    hint: "分享到朋友网"
                }
            },
            tieba: {
                name: "tieba",
                template: "<a class='#{css}' href='#{apiLink}?url=#{url}&title=#{title}' target='_blank' title='#{hint}'><img align='top' alt='#{hint}' src='#{icon}'>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://tieba.baidu.com/f/commit/share/openShareApi",
                    icon: "https://heavenduke.github.io/hshare/icons/tieba.png",
                    text: "百度贴吧",
                    hint: "分享到百度贴吧"
                }
            },
            renminweibo: {
                name: "renminweibo",
                template: "<a class='#{css}' href='#{apiLink}?url=#{url}&title=#{title}' target='_blank' title='#{hint}'><img align='top' alt='#{hint}' src='#{icon}'>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://t.people.com.cn/toshareinfo.action",
                    icon: "https://heavenduke.github.io/hshare/icons/renminweibo.png",
                    text: "人民微博",
                    hint: "分享到人民微博"
                }
            },
            hexunweibo: {
                name: "hexunweibo",
                template: "<a class='#{css}' href='#{apiLink}?url#{url}&title=#{title}' target='_blank' title='#{hint}'><img align='top' alt='#{hint}' src='#{icon}'>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://t.hexun.com/channel/shareweb.aspx",
                    icon: "https://heavenduke.github.io/hshare/icons/hexunweibo.png",
                    text: "和讯微博",
                    hint: "分享到和讯微博"
                }
            },
            tianya: {
                name: "tianya",
                template: "<a class='#{css}' href='#{apiLink}?action=send-html&shareTo=2&appkey=&url=#{url}&title=#{title}' target='_blank' title='#{hint}'><img align='top' alt='#{hint}' src='#{icon}'>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://open.tianya.cn/widget/send_for.php",
                    icon: "https://heavenduke.github.io/hshare/icons/tianya.png",
                    hint: "分享到天涯网",
                    text: "天涯网"
                }
            },
            yixin: {
                name: "yixin",
                template: "<a class='#{css}' href='#{apiLink}?type=text&text=#{title}#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://open.yixin.im/share",
                    icon: "https://heavenduke.github.io/hshare/icons/yixin.png",
                    text: "易信",
                    hint: "分享到易信"
                }
            },
            club189: {
                name: "club189",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&object_url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://club.189.cn/openshare/sharepage",
                    icon: "https://heavenduke.github.io/hshare/icons/club189.png",
                    text: "翼友圈",
                    hint: "分享到翼友圈"
                }
            },
            googleplus: {
                name: "googleplus",
                template: "<a class='#{css}' href='#{apiLink}?hl=zh-CN&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://plus.google.com/share",
                    icon: "https://heavenduke.github.io/hshare/icons/googleplus.png",
                    text: "Google+",
                    hint: "分享到Google+"
                }
            },
            tumblr: {
                name: "tumblr",
                template: "<a class='#{css}' href='#{apiLink}?shareSource=legacy&title=#{tile}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://www.tumblr.com/widgets/share/tool",
                    icon: "https://heavenduke.github.io/hshare/icons/tumblr.png",
                    text: "tumblr",
                    hint: "分享到tumblr"
                }
            },
            hotmail: {
                name: "hotmail",
                template: "<a class='#{css}' href='#{apiLink}?subject=#{title}&body=#{title}#{link}&path=/mail/action/compose' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://outlook.live.com/owa/",
                    icon: "https://heavenduke.github.io/hshare/icons/hotmail.png",
                    text: "hotmail邮箱",
                    hint: "通过hotmail邮箱发送"
                }
            },
            reddit: {
                name: "reddit",
                template: "<a class='#{css}' href='#{apiLink}?url=#{url}&title=#{title}' target='_blank' title='#{hint}'><img align='top' alt='#{hint}' src='#{icon}'>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://www.reddit.com/submit",
                    icon: "https://heavenduke.github.io/hshare/icons/reddit.png",
                    text: "Reddit",
                    hint: "分享到Reddit"
                }
            },
            ibaidu: {
                name: "ibaidu",
                template: "<a class='#{css}' href='#{apiLink}?t=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://i.baidu.com/store/",
                    icon: "https://heavenduke.github.io/hshare/icons/baidu.png",
                    text: "iBaidu",
                    hint: "分享到iBaidu"
                }
            },
            baiduhome: {
                name: "baiduhome",
                template: "<a class='#{css}' href='#{apiLink}?name=#{title}&url=#{url}&from=addtobaidu' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://www.baidu.com/home/page/show/url",
                    icon: "https://heavenduke.github.io/hshare/icons/baidu.png",
                    text: "百度首页",
                    hint: "添加到百度首页"
                }
            },
            linkedin: {
                name: "linkedin",
                template: "<a class='#{css}' href='#{apiLink}?mini=true&ro=true&armin=armin&title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://www.linkedin.com/shareArticle",
                    icon: "https://heavenduke.github.io/hshare/icons/linkedin.png",
                    text: "linkedin",
                    hint: "分享到LinkedIn"
                }
            },
            twitter: {
                name: "twitter",
                template: "<a class='#{css}' href='#{apiLink}?text=#{title}#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://twitter.com/intent/tweet",
                    icon: "https://heavenduke.github.io/hshare/icons/twitter.png",
                    text: "Twitter",
                    hint: "分享到Twitter"
                }
            },
            facebook: {
                name: "facebook",
                template: "<a class='#{css}' href='#{apiLink}?t=#{title}&u=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://www.facebook.com/sharer.php",
                    icon: "https://heavenduke.github.io/hshare/icons/facebook.png",
                    text: "Facebook",
                    hint: "分享到Facebook"
                }
            },
            feixin: {
                name: "feixin",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://i.feixin.10086.cn/apps/share/share",
                    icon: "https://heavenduke.github.io/hshare/icons/feixin.png",
                    text: "飞信同窗",
                    hint: "分享到飞信同窗"
                }
            },
            youdaocloud: {
                name: "youdaocloud",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://note.youdao.com/memory/",
                    icon: "https://heavenduke.github.io/hshare/icons/youdaocloud.png",
                    text: "有道云笔记",
                    hint: "分享到有道云笔记"
                }
            },
            qingbiji: {
                name: "qingbiji",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://www.qingbiji.cn/shareToQingBiJi",
                    icon: "https://heavenduke.github.io/hshare/icons/qingbiji.png",
                    text: "轻笔记",
                    hint: "分享到轻笔记"
                }
            },
            sdonote: {
                name: "sdonote",
                template: "<a class='#{css}' href='#{apiLink}?text=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://note.sdo.com/tool/collect",
                    icon: "https://heavenduke.github.io/hshare/icons/sdonote.png",
                    text: "麦库记事",
                    hint: "分享到麦库记事"
                }
            },
            xinhua: {
                name: "xinhua",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://t.home.news.cn/share.jsp",
                    icon: "https://heavenduke.github.io/hshare/icons/xinhua.png",
                    text: "新华微博",
                    hint: "分享到新华微博"
                }
            },
            isohu: {
                name: "isohu",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&link=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://i.sohu.com/a/app/mblog/add.htm",
                    icon: "https://heavenduke.github.io/hshare/icons/sohu.png",
                    text: "我的搜狐",
                    hint: "分享到我的搜狐"
                }
            },
            gmail: {
                name: "gmail",
                template: "<a class='#{css}' href='#{apiLink}?ui=2&view=cm&fs=1&tf=1&su=#{title}&body=#{title}#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://mail.google.com/mail/",
                    icon: "https://heavenduke.github.io/hshare/icons/gmail.png",
                    text: "Gmail",
                    hint: "通过Gmail发送"
                }
            },
            instapaper: {
                name: "instapaper",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://www.instapaper.com/edit",
                    icon: "https://heavenduke.github.io/hshare/icons/instapaper.png",
                    text: "Instapaper",
                    hint: "分享到Instapaper"
                }
            },
            pocket: {
                name: "pocket",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://getpocket.com/edit.php",
                    icon: "https://heavenduke.github.io/hshare/icons/pocket.png",
                    text: "Pocket",
                    hint: "分享到Pocket"
                }
            },
            netvibes: {
                name: "netvibes",
                template: "<a class='#{css}' href='#{apiLink}?share=true&title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://www.netvibes.com/dashboard/1",
                    icon: "https://heavenduke.github.io/hshare/icons/netvibes.png",
                    text: "Netvibes",
                    hint: "分享到Netvibes"
                }
            },
            buffer: {
                name: "buffer",
                template: "<a class='#{css}' href='#{apiLink}?text=#{title}#{url}&url=#{url}' target='_blank' title=#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://buffer.com/add",
                    icon: "https://heavenduke.github.io/hshare/icons/buffer.png",
                    text: "buffer",
                    hint: "'分享到Buffer"
                }
            },
            hootsuite: {
                name: "hootsuite",
                template: "<a class='#{css}' href='?title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "https://hootsuite.com/hootlet/social-share",
                    icon: "https://heavenduke.github.io/hshare/icons/hootsuite.png",
                    text: "hootsuite",
                    hint: "分享到HootSuite"
                }
            },
            digg: {
                name: "digg",
                template: "<a class='#{css}' href='#{apiLink}?phase=2&title=#{title}&url=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://digg.com/submit",
                    icon: "https://heavenduke.github.io/hshare/icons/digg.png",
                    text: "digg",
                    hint: "分享到digg"
                }
            },
            chouti: {
                name: "chouti",
                template: "<a class='#{css}' href='#{apiLink}?title=#{title}&newsURL=#{url}' target='_blank' title='#{hint}'><img align='top' src='#{icon}' alt='#{hint}'/>#{text}</a>",
                default: false,
                params: {
                    apiLink: "http://dig.chouti.com/digg.action",
                    icon: "https://heavenduke.github.io/hshare/icons/chouti.png",
                    text: "抽屉网",
                    hint: "分享到抽屉网"
                }
            }
        };
        var addons = {
            copyLink: {
                template: "<a class='#{css}' title='复制链接'><img align='top' alt='复制链接' src='#{icon}'>#{text}</a>",
                params: {
                    icon: "https://heavenduke.github.io/hshare/icons/copylink.png",
                    text: "复制链接"
                }
            },
            print: {
                template: "<a class='#{css}' title='打印页面'><img align='top' alt='打印页面' src='#{icon}'>#{text}</a>",
                params: {
                    icon: "https://heavenduke.github.io/hshare/icons/print.png",
                    text: "打印"
                },
                callback: function () {
                    window.print();
                }
            },
            bookmark: {
                template: "<a class='#{css}' title='添加到收藏夹'><img align='top' alt='添加到收藏夹' src='#{icon}'>#{text}</a>",
                params: {
                    icon: "https://heavenduke.github.io/hshare/icons/bookmark.png",
                    text: "收藏夹"
                },
                callback: function () {
                    alert("请按Ctrl + D以将本页面添加至收藏夹");
                }
            },
            more: {
                template: "<a class='#{css}' title='更多'><img align='top' alt='更多' src='#{icon}'></a>",
                params: {
                    icon: "https://heavenduke.github.io/hshare/icons/more.png"
                }
            },
            stat: {
                template: "<div class='#{css} hshare-stat-container'>#{stat}</div>",
                params: {
                    stat: 0
                }
            }
        };
        var sizes = ["small", "medium", "large"];
        var defaults = {
            size: "medium",
            copyLink: true,
            print: false,
            bookmark: false,
            more: true,
            renderText: false,
            platforms: [],
            extended: []
        };

        var _render = function (platform) {
            var template = platform.template || "";
            var params = platform.params || {};
            for (var key in params) {
                var pattern = new RegExp("#\{" + key + "\}", "g");
                template = template.replace(pattern, params[key]);
            }
            var node = $(template);
            if (platform.callback instanceof Function) {
                node.click(platform.callback);
            }
            return node;
        };

        var _defaultRenderer = function (platform) {
            platform.params.url = platform.params.url ? platform.params.url : url;
            platform.params.title = platform.params.title ? platform.params.title : title;
            platform.params.size = size;
            platform.params.text = opts.renderText == true ? platform.params.text : "";
            platform.params.css = platform.params.css ? platform.params.css : "hshare hshare-" + platform.params.size + ( opts.renderText == true ? " hshare-text" : "");
            return _render(platform);
        };

        var _renderer = function (platform) {
            if (platforms.hasOwnProperty(platform.name)) {
                return _defaultRenderer(platform);
            }
            else {
                return _render(platform);
            }
        };

        var _renderMorePanel = function () {
            var container = $("<div class='hshare-more-container'></div>");
            var header = $("<div class='hshare-more-header'><div class='hshare-more-title'>更多平台</div><div class='hshare-more-close'>×</div></div>");
            var body = $("<div class='hshare-more-body'></div>");
            container.append(header).append(body);
            var content = $("<table></table>");
            body.append(content);
            var rowData = [], row, element;
            for (var pIndex in opts.extended) {
                var platform = opts.extended[pIndex];
                if (rowData.length >= 2) {
                    row = $("<tr></tr>");
                    for(var i = 0; i < rowData.length; i++) {
                        element = $("<td class='hshare-more-item'></td>");
                        var entry = _renderer(rowData[i]);
                        element.append(entry);
                        var name = rowData[i].name;
                        if (opts.stat instanceof Object) {
                            entry.on("click", function () {
                                $.post(opts.stat.updateUrl, {platform: name, url: decodedUrl}, function () {
                                    statContainer.html(parseInt(statContainer.text().trim()) + 1);
                                }, 'json');
                            });
                        }
                        row.append(element);
                    }
                    content.append(row);
                    rowData.splice(0, rowData.length);
                }
                rowData.push(platform);
            }
            row = $("<tr></tr>");
            for(i = 0; i < rowData.length; i++) {
                element = $("<td class='hshare-more-item'></td>");
                var entry = _renderer(rowData[i]);
                element.append(entry);
                var name = rowData[i].name;
                if (opts.stat instanceof Object) {
                    entry.on("click", function () {
                        $.post(opts.stat.updateUrl, {platform: name}, function () {
                            statContainer.html(parseInt(statContainer.text().trim()) + 1);
                        }, 'json');
                    });
                }
                row.append(element);
            }
            content.append(row);
            return container;
        };

        var _calculateLocation = function (ex, ey, width, height, sw, sh) {
            var result = {};
            if (ex + width > sw) {
                result.x = ex - width;
            }
            else {
                result.x = ex;
            }
            if (ey + height > sh) {
                result.y = ey - height;
            }
            else {
                result.y = ey;
            }
            return result;
        };

        var _isWithinBox = function(cx, cy, px, py, pw, ph) {
            return cx >= px && cy >= py && cx <= px + pw && cy <= py + ph;
        };

        var _loadScript = function (url, callback) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;

            script.onreadystatechange = callback;
            script.onload = callback;

            head.appendChild(script);
        };

        var opts = options ? $.extend(true, {}, options) : $.extend(true, {}, defaults);

        opts.size = opts.renderText == true ? "small" : opts.size;

        // Initialize platforms
        opts.platforms = [];
        if (options && (options.platforms instanceof Array)) {
            for(var i = 0; i < options.platforms.length; i++) {
                var platform = options.platforms[i];
                opts.platforms.push($.extend({}, (platform.name && platforms[platform.name]) ? platforms[platform.name] : {}, platform));
            }
        }
        else {
            for (var key in platforms) {
                if (platforms[key].default) {
                    opts.platforms.push(new Object(platforms[key]));
                }
            }
        }

        // initialize extended platforms
        opts.extended = [];
        if (options && opts.more == true && (options.extended instanceof Array)) {
            for(i = 0; i < options.extended.length; i++) {
                platform = options.extended[i];
                opts.extended.push($.extend({}, (platform.name && platforms[platform.name]) ? platforms[platform.name] : {}, platform));
            }
        }
        else if (opts.more == true) {
            for (var key in platforms) {
                var find = false;
                var plt = platforms[key];
                for (var key2 in opts.platforms) {
                    if (opts.platforms[key2].name == plt.name) {
                        find = true;
                        break;
                    }
                }
                if (find == false) {
                    opts.extended.push(new Object(plt));
                }
            }
        }

        if (opts.extended.length == 0) {
            opts.more = false;
        }

        // initialize encoded url and title of hshare
        var url = encodeURIComponent(location.href);
        var decodedUrl = location.href.replace(location.search, "");
        var title = encodeURIComponent(document.title);
        var size = $.inArray(opts.size, sizes) != -1 ? opts.size : "medium";
        var statContainer = null;

        return this.each(function () {
            var $this = $(this);

            var _platforms = opts.platforms;

            if (opts.stat instanceof Object) {
                statContainer = _defaultRenderer(addons.stat);
                $.get(opts.stat.loadUrl, {url: decodedUrl}, function (data) {
                    statContainer.html(data.stat);
                }, 'json');
            }

            for(var i = 0; i < _platforms.length; i++) {
                var entry = _renderer(_platforms[i]);
                var name = _platforms[i].name;
                if (opts.stat instanceof Object) {
                    entry.on("click", function () {
                        $.post(opts.stat.updateUrl, {platform: name, url: decodedUrl}, function () {
                            statContainer.html(parseInt(statContainer.text().trim()) + 1);
                        }, 'json');
                    });
                }
                $this.append(entry);
            }

            // Initialize copyLink entry if required
            if (opts.copyLink == true) {
                var copyEntry = _defaultRenderer(addons.copyLink);
                _loadScript("https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.16/clipboard.min.js", function () {
                    var clipboard = new Clipboard(copyEntry[0], {
                        text: function (trigger) {
                            return location.href;
                        }
                    });

                    clipboard.on('success', function (e) {
                        alert("已复制链接到剪贴板");
                    });
                });
                $this.append(copyEntry);
            }

            // Initialize print entry if required
            if (opts.print == true) {
                var printEntry = _defaultRenderer(addons.print);
                $this.append(printEntry);
            }

            // Initialize bookmark entry if required
            if (opts.bookmark == true) {
                var bookmarkEntry = _defaultRenderer(addons.bookmark);
                $this.append(bookmarkEntry);
            }

            var _hoverout = function (event) {
                var cursorX = event.pageX;
                var cursorY = event.pageY;
                var panelLeft = morePanel.offset().left;
                var panelTop = morePanel.offset().top;
                var panelWidth = morePanel.width();
                var panelHeight = morePanel.height();
                if (!_isWithinBox(cursorX, cursorY, panelLeft, panelTop, panelWidth, panelHeight)) {
                    morePanel.css('display', "none");
                }
            };

            var _hoverin = function (event) {
                if (morePanel.css("display") == "none") {
                    var left = event.pageX;
                    var top = event.pageY;
                    var width = morePanel.width();
                    var height = morePanel.height();
                    var screenWidth = $(window).width();
                    var screenHeight = $(window).height();
                    var location = _calculateLocation(left, top, width, height, screenWidth, screenHeight);
                    morePanel.attr("style", "left: " + location.x + "px; top: " + location.y + "px;");
                    morePanel.css('display', "block");
                }
            };

            // Initialize extended entry if required
            if (opts.more == true) {
                var moreEntry = _defaultRenderer(addons.more);
                opts.renderText = true;
                size = "small";
                var morePanel = _renderMorePanel();
                $this.append(moreEntry);
                $("body").append(morePanel);
                moreEntry.hover(_hoverin, _hoverout);
                morePanel.on('mouseout mouseleave', _hoverout);
            }

            if (opts.stat instanceof Object) {
                $this.append(statContainer);
            }

        });
    };

    $.fn.extend({
        hshare: hShare
    });

})(jQuery);