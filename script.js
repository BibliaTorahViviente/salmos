document.addEventListener('DOMContentLoaded', function() {
    const playlist = [
       { "title": "Salmo 1", "url": "https://www.dropbox.com/scl/fi/bb5jmsv1rovghfl4xtmcs/Sal-Tehilim-1-Bilblia-Torah-Viviente-2024.mp3?rlkey=k3y48i41jtasr8yaejxfg4ktm&st=73bvxyqp&dl=1", plays: 0 },
    { "title": "Salmo 2", "url": "https://www.dropbox.com/scl/fi/wuggup0znn4iehhzuniea/Sal-Tehilim-2-Bilblia-Torah-Viviente-2024.mp3?rlkey=1zhft0i8seg5jjcmh80kez6wb&st=u0p8ssfa&dl=1", plays: 0 },
    { "title": "Salmo 3", "url": "https://www.dropbox.com/scl/fi/x1f6k85zhm50dh0a26nfm/Sal-Tehilim-3-Bilblia-Torah-Viviente-2024-..mp3?rlkey=jpso53pe9ascus6gickchl7c6&st=9qhexx6t&dl=1", plays: 0 },
    { "title": "Salmo 4", "url": "https://www.dropbox.com/scl/fi/48vr02hr6walemku7smvt/Sal-Tehilim-4-Bilblia-Torah-Viviente-2024.mp3?rlkey=zvv3ygygnv2sdapej3d4vg5n0&st=1da2rpka&dl=1", plays: 0 },
    { "title": "Salmo 5", "url": "https://www.dropbox.com/scl/fi/4kfz91k0c3uo7mdql0x9d/Sal-Tehilim-5-Bilblia-Torah-Viviente-2024.mp3?rlkey=0ex0qhia1g060s36m4pr99g66&st=exj8g8nk&dl=1", plays: 0 },
    { "title": "Salmo 6", "url": "https://www.dropbox.com/scl/fi/g7woiwv0818l8aq29pprz/Sal-Tehilim-6-Bilblia-Torah-Viviente-2024.mp3?rlkey=w4ut6bq6muhancygw4gbz5eo4&st=qnsmsd9o&dl=1", plays: 0 },
    { "title": "Salmo 7", "url": "https://www.dropbox.com/scl/fi/xqxdko3yzcv9ycp110qv4/Sal-Tehilim-7-Bilblia-Torah-Viviente-2024.mp3?rlkey=t7xhi3ktdo8hou334x2rzc75q&st=jyx21evq&dl=1", plays: 0 },
    { "title": "Salmo 7b", "url": "https://www.dropbox.com/scl/fi/v6sf5gvfm3j78wicdu482/Sal-Tehilim-7-se-Bilblia-Torah-Viviente-2024.mp3?rlkey=5m5w46yd4cgwztczett1pdwg5&st=s1nciwj1&dl=1", plays: 0 },
    { "title": "Salmo 8", "url": "https://www.dropbox.com/scl/fi/zhgbz0obkck20dc5shs2n/Sal-Tehilim-8-Bilblia-Torah-Viviente-2024.mp3?rlkey=k5vv0rzpoyd46m39y07yd5fyt&st=l1n9lhek&dl=1", plays: 0 },
    { "title": "Salmo 9", "url": "https://www.dropbox.com/scl/fi/i5nx8e0f5jf2alrra0kcp/Sal-Tehilim-9-Bilblia-Torah-Viviente-2024.mp3?rlkey=fuph8dd5fclodr054b0lmb4up&st=vo64tgip&dl=1", plays: 0 },
    { "title": "Salmo 10", "url": "https://www.dropbox.com/scl/fi/7n2ff12enb6gw81jhtsjx/Sal-Tehilim-10-Bilblia-Torah-Viviente-2024.mp3?rlkey=a5msho8su4dww2ihc7014nzoq&st=lqhmozca&dl=1", plays: 0 },
    { "title": "Salmo 11", "url": "https://www.dropbox.com/scl/fi/wqvvmqklbqslnksn6qvku/Sal-Tehilim-11-Bilblia-Torah-Viviente-2024.mp3?rlkey=azbb3y51d9jczneo59okqhk14&st=kkgvmy0m&dl=1", plays: 0 },
    { "title": "Salmo 12", "url": "https://www.dropbox.com/scl/fi/h3g96b884j9ku4s23eh7e/Sal-Tehilim-12-Bilblia-Torah-Viviente-2024.mp3?rlkey=fusnop1g7fklvy1mrv5f5y6a9&st=tbsme4sn&dl=1", plays: 0 },
    { "title": "Salmo 13", "url": "https://www.dropbox.com/scl/fi/g673iau16pxu8civ1jrtz/Sal-Tehilim-13-Bilblia-Torah-Viviente-2024.mp3?rlkey=jvrgjmwhblb7qu88oklvyzpw8&st=wfmhb6s1&dl=1", plays: 0 },
    { "title": "Salmo 14", "url": "https://www.dropbox.com/scl/fi/5wkc2wndaicpe722b8vkp/Sal-Tehilim-14-Bilblia-Torah-Viviente-2024.mp3?rlkey=9xbyfs9bz9ksem2ij7xx3xlc0&st=uptjy7m0&dl=1", plays: 0 },
    { "title": "Salmo 15", "url": "https://www.dropbox.com/scl/fi/v6vv55c4g6om4sb8hawzp/Sal-Tehilim-15-Bilblia-Torah-Viviente-2024.mp3?rlkey=dx1gpoyoh12y0cf779p6tgwa2&st=kwyb3bv7&dl=1", plays: 0 },
    { "title": "Salmo 16", "url": "https://www.dropbox.com/scl/fi/izgtharwr1iu3sporid11/Sal-Tehilim-16-Bilblia-Torah-Viviente-2024.mp3?rlkey=ad5zliddna47jnbad7zc9eawc&st=zyneye4o&dl=1", plays: 0 },
    { "title": "Salmo 17", "url": "https://www.dropbox.com/scl/fi/olm518ht0zatu1s3d0nub/Sal-Tehilim-17-Bilblia-Torah-Viviente-2024.mp3?rlkey=rvrzxccfjdche7cgcy38hqjbd&st=yqv5abm4&dl=1", plays: 0 },
    { "title": "Salmo 18", "url": "https://www.dropbox.com/scl/fi/go4s1g9ja2qb4hi1i5ams/Sal-Tehilim-18-Bilblia-Torah-Viviente-2024.mp3?rlkey=72eaf36m4d1d67twtdt4jx7qa&st=bssxnfz8&dl=1", plays: 0 },
    { "title": "Salmo 19", "url": "https://www.dropbox.com/scl/fi/uarxzlb5yh3ke3aag9qra/Sal-Tehilim-19-Bilblia-Torah-Viviente-2024.mp3?rlkey=t8qqabvhfut7tjt4vquwdo2o5&st=rpuu7k1z&dl=1", plays: 0 },
    { "title": "Salmo 20", "url": "https://www.dropbox.com/scl/fi/5twej5tulh98nxvtoxqrz/Sal-Tehilim-20-Bilblia-Torah-Viviente-2024.mp3?rlkey=693qs8f4berwrpp7e7pj1zd0b&st=ekcn12ov&dl=1", plays: 0 },
    { "title": "Salmo 22", "url": "https://www.dropbox.com/scl/fi/a1o211bc1d28arv27m2cj/Sal-Tehilim-22-Bilblia-Torah-Viviente-2024.mp3?rlkey=z1hcp8i78l40f4eklynbnrk3f&st=bk7gx1ck&dl=1", plays: 0 },
    { "title": "Salmo 23", "url": "https://www.dropbox.com/scl/fi/hvt9oe86jst0ubrxt9yqe/Sal-Tehilim-23-Bilblia-Torah-Viviente-2024.mp3?rlkey=wiqio0lg4mx4ylm8022agw19e&st=13qin6nl&dl=1", plays: 0 },
    { "title": "Salmo 24", "url": "https://www.dropbox.com/scl/fi/5itu8sw13g4iqhzdfepqh/Sal-Tehilim-24-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=d89ugrhucqqrq36ujh89zk3r7&st=7579elfo&dl=1", plays: 0 },
    { "title": "Salmo 24b", "url": "https://www.dropbox.com/scl/fi/90ycho3gjhiddmta52vn9/Sal-Tehilim-24-Bilblia-Torah-Viviente-2024.mp3?rlkey=icn752uj0dxj7dbo3ydwxxcyw&st=w0qf9sys&dl=1", plays: 0 },
    { "title": "Salmo 25", "url": "https://www.dropbox.com/scl/fi/kp5ucqn981qdlw28n3app/Sal-Tehilim-25-Bilblia-Torah-Viviente-2024.mp3?rlkey=sp4pautssapns2u4ar313d2ar&st=23c4tn4o&dl=1", plays: 0 },
    { "title": "Salmo 26", "url": "https://www.dropbox.com/scl/fi/l4n8218nhnnj6wh98xjjk/Sal-Tehilim-26-Bilblia-Torah-Viviente-2024.mp3?rlkey=dkmlkbmi8lvjl7gkv2e4y92ut&st=g0ny6y24&dl=1", plays: 0 },
    { "title": "Salmo 27", "url": "https://www.dropbox.com/scl/fi/r32vo61r7ranpms4kntx5/Sal-Tehilim-27-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=slb73jfzjfayeejqqvj37gcc6&st=spycnb8b&dl=1", plays: 0 },
    { "title": "Salmo 28", "url": "https://www.dropbox.com/scl/fi/kn0aozbcjxw6ahdbubv6m/Sal-Tehilim-28-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=vgpup1en7m69ep3in65reoilk&st=qxzb8fzu&dl=1", plays: 0 },
    { "title": "Salmo 29", "url": "https://www.dropbox.com/scl/fi/q2smla2y6cukr46ubypsw/Sal-Tehilim-29-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=oyxh8pxp06pbrn1m5ytx7drjj&st=rqi75odl&dl=1", plays: 0 },
    { "title": "Salmo 30", "url": "https://www.dropbox.com/scl/fi/2alfflebm9e7ezykney98/Sal-Tehilim-30-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=hq107fk9vy9rg1241iy292rcn&st=envsh62h&dl=1", plays: 0 },
    { "title": "Salmo 31", "url": "https://www.dropbox.com/scl/fi/g38zl9f16gl4idkf50ww3/Sal-Tehilim-31-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=zpsrgsjgver80c1rns7su1swn&st=jbwl8txt&dl=1", plays: 0 },
    { "title": "Salmo 32", "url": "https://www.dropbox.com/scl/fi/djynzkbqswoaxu1h2loeb/Sal-Tehilim-32-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=7u0c990xgzxbz9lmil5r9ub4v&st=on8uajlz&dl=1", plays: 0 },
    { "title": "Salmo 33", "url": "https://www.dropbox.com/scl/fi/k2sptlcq3xffryawtzrv0/Sal-Tehilim-33-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=bw0t6ibhk057y3p3ywa6kquie&st=j2r5716n&dl=1", plays: 0 },
    { "title": "Salmo 34", "url": "https://www.dropbox.com/scl/fi/ubsrbgo07exc6ihcuf991/Sal-Tehilim-34-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=yk1k5hqm5f35eefjtgt7rhb5n&st=x6zkykny&dl=1", plays: 0 },
    { "title": "Salmo 35", "url": "https://www.dropbox.com/scl/fi/shk7jwxuxteylp582932c/Sal-Tehilim-35-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=gea89gd4s9cudozplaa6qfxwq&st=l9htb6vl&dl=1", plays: 0 },
    { "title": "Salmo 36", "url": "https://www.dropbox.com/scl/fi/dzw4tmmlkm9tz1o9107kh/Sal-Tehilim-36-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=cxfgvk0tsutvp49jwiz6pyfod&st=xtiqrgoj&dl=1", plays: 0 },
    { "title": "Salmo 37", "url": "https://www.dropbox.com/scl/fi/jubqu4p5rl2gv4ngaekgy/Sal-Tehilim-37-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=8qkt4njjshlbut9ohre46rd5i&st=5f3k3dkt&dl=1", plays: 0 },
    { "title": "Salmo 38", "url": "https://www.dropbox.com/scl/fi/gzh8bw5jozynee63zbc14/Sal-Tehilim-38-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=77acd3bqdastt4mo6qwucrxjo&st=f5e7bn2d&dl=1", plays: 0 },
    { "title": "Salmo 39", "url": "https://www.dropbox.com/scl/fi/s1gz8kgpoogxw72y1nkjr/Sal-Tehilim-39-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ah3kof7xyq17mlbu07vj6q0qg&st=177m8mwd&dl=1", plays: 0 },
    { "title": "Salmo 40", "url": "https://www.dropbox.com/scl/fi/jfk55i1061n97emftt6yf/Sal-Tehilim-40-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=l4csh5xhqx7fbl3bb5w0nuog0&st=hba65ezu&dl=1", plays: 0 },
     { "title": "Salmo 42", "url": "https://www.dropbox.com/scl/fi/79hukja2gft8ygrpriog0/Sal-Tehilim-42-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=qcgnzkbwdj8khk4ods274v2yd&st=333onuyb&dl=1", plays: 0 },
    { "title": "Salmo 43", "url": "https://www.dropbox.com/scl/fi/mxdbuqyl4sxinfekj02k9/Sal-Tehilim-43-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ogghk81ji5wtik5ogdyazby77&st=7x1otwk2&dl=1", plays: 0 },
    { "title": "Salmo 44", "url": "https://www.dropbox.com/scl/fi/nc4l5vl920yx3dcsgn6w9/Sal-Tehilim-44-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=b95rbhddip3wnqsha3ldz32f9&st=6sw8v5f4&dl=1", plays: 0 },
    { "title": "Salmo 45", "url": "https://www.dropbox.com/scl/fi/qbdruta369785r9x1b4vk/Sal-Tehilim-45-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=nd1kguzvyhq5slxbyrli6ktb4&st=ral9oveg&dl=1", plays: 0 },
    { "title": "Salmo 46", "url": "https://www.dropbox.com/scl/fi/rgg9hz9b7tsdehf9lkq28/Sal-Tehilim-46-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=jttnr5mrxyv4mdoqej7deqtkr&st=tslf9amf&dl=1", plays: 0 },
    { "title": "Salmo 47", "url": "https://www.dropbox.com/scl/fi/pd2r5capeosoawhca9nu5/Sal-Tehilim-47-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=vsztcnhb6e7uitsc85488ww98&st=ev6vm9hn&dl=1", plays: 0 },
    { "title": "Salmo 48", "url": "https://www.dropbox.com/scl/fi/92xn94hkfrqbb9chien8y/Sal-Tehilim-48-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=5qjzutt23rxi9lmw19oqsazsy&st=xuz5m8bj&dl=1", plays: 0 },
    { "title": "Salmo 49", "url": "https://www.dropbox.com/scl/fi/r0nrr1i9gq5a3d7vit35l/Sal-Tehilim-49-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=027yvz5m28k7skti7pvgcdauc&st=xz4bgft7&dl=1", plays: 0 },
    { "title": "Salmo 50", "url": "https://www.dropbox.com/scl/fi/iak4jewfz1tqexmffex6i/Sal-Tehilim-50-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ox1rc2vp3ap5jrx1p0wnjjk20&st=0rwkirnn&dl=1", plays: 0 },
    { "title": "Salmo 51", "url": "https://www.dropbox.com/scl/fi/7qbcjvhpdcop17si0yfvh/Sal-Tehilim-51-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=1fho3ut3q7wew3azw4cgf699v&st=ocskq2wl&dl=1", plays: 0 },
    { "title": "Salmo 52", "url": "https://www.dropbox.com/scl/fi/zxkw1wqba4pdgq3xrayee/Sal-Tehilim-52-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ubexnv7nftd32bgtg30ky7b57&st=nrtodf5c&dl=1", plays: 0 },
    { "title": "Salmo 53", "url": "https://www.dropbox.com/scl/fi/w8481ec1ioibganr07sdv/Sal-Tehilim-53-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=k9jsrh2cinvvlzfhbwlyc4obu&st=5q02c1w4&dl=1", plays: 0 },
    { "title": "Salmo 54", "url": "https://www.dropbox.com/scl/fi/zouqpxp8y9ou8t7l0698f/Sal-Tehilim-54-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=qzpceb3hqkdafpid4utx3g91u&st=enoh14h6&dl=1", plays: 0 },
    { "title": "Salmo 55", "url": "https://www.dropbox.com/scl/fi/2xx9r2nri85t05n8b7kij/Sal-Tehilim-55-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=lsd0msvtxutn41dfmimmuag5i&st=flcecm0h&dl=1", plays: 0 },
    { "title": "Salmo 56", "url": "https://www.dropbox.com/scl/fi/79ilgx1n21ao3k9xvggsl/Sal-Tehilim-56-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=4cz3hfh6l87wm2qkp1j7c7ka3&st=c6onqpqb&dl=1", plays: 0 },
    { "title": "Salmo 57", "url": "https://www.dropbox.com/scl/fi/lno8uxm1bc0frrucwq0bh/Sal-Tehilim-57-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ykt7at2ckggpu3ul2inmvb9gs&st=jq4r8bla&dl=1", plays: 0 },
    { "title": "Salmo 58", "url": "https://www.dropbox.com/scl/fi/xukbgg1ccdwqvjfbrem5q/Sal-Tehilim-58-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ico6tug3xa4gknsuf8ztmli0m&st=bg915a9e&dl=1", plays: 0 },
    { "title": "Salmo 59", "url": "https://www.dropbox.com/scl/fi/mqj6wk0hgoz4q6xnncnau/Sal-Tehilim-59-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=4yeh9qcfpqrwy3njl7k3jx64k&st=jlwyu770&dl=1", plays: 0 },
    { "title": "Salmo 60", "url": "https://www.dropbox.com/scl/fi/yl1emkytyp4pth0evgxzz/Sal-Tehilim-60-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=huahcl4qrdt4t5hlgueg4typ0&st=qhyd0w0m&dl=1", plays: 0 },
    { "title": "Salmo 61", "url": "https://www.dropbox.com/scl/fi/xhyncd27t3xbvlg6rfbpd/Sal-Tehilim-61-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=8ihb5mp9kdp6y0bxjlkvrydcg&st=pd1jjn31&dl=1", plays: 0 },
    { "title": "Salmo 62", "url": "https://www.dropbox.com/scl/fi/rgk4omp3ia45shqd7mox6/Sal-Tehilim-62-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=r4oj6p52lxvm1tzdpk62ujtky&st=0ssh3377&dl=1", plays: 0 },
    { "title": "Salmo 63", "url": "https://www.dropbox.com/scl/fi/exxs37seje9kipvsb8kyo/Sal-Tehilim-63-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=5ylq3el06c5vddr6bpta33xcr&st=bzn5asa1&dl=1", plays: 0 },
    { "title": "Salmo 64", "url": "https://www.dropbox.com/scl/fi/31ag9v0t0tudlrx3637kt/Sal-Tehilim-64-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=9zfbcmt5l0krh44nmf4gkhuor&st=nsz086ty&dl=1", plays: 0 },
    { "title": "Salmo 65", "url": "https://www.dropbox.com/scl/fi/xt7ic3y303b0asf3grukr/Sal-Tehilim-65-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=89nt7g4cphxgc9r2o0er93md6&st=elervvrh&dl=1", plays: 0 },
    { "title": "Salmo 65b", "url": "https://www.dropbox.com/scl/fi/35kjo3l50526uurd0akt0/Sal-Tehilim-65-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ur2o7qeirrvficmdwkm6hgw1w&st=z3j02kxk&dl=1", plays: 0 },
    { "title": "Salmo 66", "url": "https://www.dropbox.com/scl/fi/xgb3i6ys7o61vrdr2m785/Sal-Tehilim-66-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=2nf682g69mm98vz523djicd56&st=m5n41xzv&dl=1", plays: 0 },
    { "title": "Salmo 66b", "url": "https://www.dropbox.com/scl/fi/cd43w44rjgde69jr5r791/Sal-Tehilim-66-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=oi317dxqzqkqbs2uxol96rys9&st=1mk5z7l3&dl=1", plays: 0 },
    { "title": "Salmo 67", "url": "https://www.dropbox.com/scl/fi/jyuk2bqrtqcze4pqovltu/Sal-Tehilim-67-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=33jj3o4yubjxjmhfyphlshzte&st=yvnn8uh8&dl=1", plays: 0 },
    { "title": "Salmo 67b", "url": "https://www.dropbox.com/scl/fi/bb5rwxn1anx13yts5rdzj/Sal-Tehilim-67-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ho6p4y2yjjf2xorjy52m69ju4&st=fxg3h1ac&dl=1", plays: 0 },
    { "title": "Salmo 68", "url": "https://www.dropbox.com/scl/fi/ywyh09zphkxi6vcqzberz/Sal-Tehilim-68-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=7v7cltt0e14yvmn9gzpckntcr&st=5tvg1rl5&dl=1", plays: 0 },
    { "title": "Salmo 68b", "url": "https://www.dropbox.com/scl/fi/qsjuvqjwawpabfwyjjtse/Sal-Tehilim-68-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=f6uv78x7mmca99qmst80lhrhs&st=2rdpca3m&dl=1", plays: 0 },
    { "title": "Salmo 69", "url": "https://www.dropbox.com/scl/fi/sq8sgfw6rzh6kcw3sxcg6/Sal-Tehilim-69-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=rzsh6ii8z27sggjxrmnhewkko&st=5ma9o34j&dl=1", plays: 0 },
    { "title": "Salmo 69b", "url": "https://www.dropbox.com/scl/fi/1ho6xbn53ciwwlj7dexyh/Sal-Tehilim-69-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=gwq38gjnw27mo5eu1nqna9aha&st=phpzp3d0&dl=1", plays: 0 },
    { "title": "Salmo 70", "url": "https://www.dropbox.com/scl/fi/217tebfkjhfil2cw3cqyc/Sal-Tehilim-70-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=op3su2rd4rqf6zpx7bwjq6cyi&st=39d1gkji&dl=1", plays: 0 },
    { "title": "Salmo 71", "url": "https://www.dropbox.com/scl/fi/hjxbdceb5pr547ikd8raw/Sal-Tehilim-71-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=hr9n0e6e8y493jo2ol5xj42bm&st=4y43hhhx&dl=1", plays: 0 },
    { "title": "Salmo 72", "url": "https://www.dropbox.com/scl/fi/g7usx5alw25f6snal30pb/Sal-Tehilim-72-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=z7xkapa9yggp7sg9lxl76kzi2&st=vk0c020o&dl=1", plays: 0 },
    { "title": "Salmo 73", "url": "https://www.dropbox.com/scl/fi/qvzdm4qzzc7vyg5qvjno2/Sal-Tehilim-73-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=f51zc2vgrdqaqdahar3ebauy3&st=vegk1chd&dl=1", plays: 0 },
    { "title": "Salmo 74", "url": "https://www.dropbox.com/scl/fi/zbvbl3096q9kdj6zj80vm/Sal-Tehilim-74-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=hek3af98cdqthwehcddwxrl89&st=8p6p744f&dl=1", plays: 0 },
    { "title": "Salmo 75", "url": "https://www.dropbox.com/scl/fi/jz2zmi4fgp9lznz52jkdz/Sal-Tehilim-75-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=j4fnmznxsawni5hjwtgee71xn&st=5ww49814&dl=1", plays: 0 },
    { "title": "Salmo 76", "url": "https://www.dropbox.com/scl/fi/9gfllgdw3g3yxxwoyzpxf/Sal-Tehilim-76-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=idkps5wu8vyv4hrbjmclpss3a&st=jkhc86hr&dl=1", plays: 0 },
    { "title": "Salmo 77", "url": "https://www.dropbox.com/scl/fi/4lhqc3om28yzdl4hc2cys/Sal-Tehilim-77-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=xc0a0sbrx5qvrqhwns86p5z5p&st=yvk5ztu9&dl=1", plays: 0 },
    { "title": "Salmo 78", "url": "https://www.dropbox.com/scl/fi/bu3urky5lvewskx62vmyi/Sal-Tehilim-78-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ke1ks74l020hym5fha4gcbwis&st=xp4ypm7g&dl=1", plays: 0 },
    { "title": "Salmo 78b", "url": "https://www.dropbox.com/scl/fi/5imk3r73k7xim4923qdgq/Sal-Tehilim-78-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=72vn2jgdb4q6ch8o9cvcyz9kn&st=ueqh6npm&dl=1", plays: 0 },
    { "title": "Salmo 79", "url": "https://www.dropbox.com/scl/fi/qbwygxeccza6kltu7hpee/Sal-Tehilim-79-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ov6k6pjy700p0exeph68letij&st=eopklgpt&dl=1", plays: 0 },
    { "title": "Salmo 79b", "url": "https://www.dropbox.com/scl/fi/buflej0rso5lyak6zpuvi/Sal-Tehilim-79-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=3ms3epwyl1er9rg1wcdwqxfu2&st=kgir21s1&dl=1", plays: 0 },
    { "title": "Salmo 80", "url": "https://www.dropbox.com/scl/fi/4b5kmq8bxcjcfx9ablo73/Sal-Tehilim-80-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=bxig51lkip0nydsu0o2gfhdpv&st=wia9okbo&dl=1", plays: 0 },
    { "title": "Salmo 80b", "url": "https://www.dropbox.com/scl/fi/cdshzwvg8o19mp69sjnnd/Sal-Tehilim-80-Loc-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=lq6gn2yt38natlbfsjyrzxace&st=j3abtgxw&dl=1", plays: 0 },
    { "title": "Salmo 81", "url": "https://www.dropbox.com/scl/fi/scepv7isqcqdbx4d6bjvd/Sal-Tehilim-81-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=i54yi6hutxjxhf2yvq4dkgcmr&st=j6nvkm9v&dl=1", plays: 0 },
    { "title": "Salmo 82", "url": "https://www.dropbox.com/scl/fi/p60b4z46pq5xj9ihhud3z/Sal-Tehilim-82-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=dftcswjnjt34z3rd5lr2cn2is&st=1ort4q50&dl=1", plays: 0 },
    { "title": "Salmo 83", "url": "https://www.dropbox.com/scl/fi/8wovvvat2tl766dvefzwt/Sal-Tehilim-83-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=qldsoouxtmgctd1z3qer1y6ye&st=7xtf1p4u&dl=1", plays: 0 },
    { "title": "Salmo 84", "url": "https://www.dropbox.com/scl/fi/jd3hadmr4bwgflooov5xt/Sal-Tehilim-84-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=eeaxoqz76d40te5yu1sh7otcb&st=x138km9q&dl=1", plays: 0 },
    { "title": "Salmo 85", "url": "https://www.dropbox.com/scl/fi/md3yzf2rdudgf7vqjop4n/Sal-Tehilim-85-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=xfvqii3oarlpkrkenj3bairpl&st=70u5wat1&dl=1", plays: 0 },
    { "title": "Salmo 86", "url": "https://www.dropbox.com/scl/fi/jozeq5qcyrhx8gx5uwvgj/Sal-Tehilim-86-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=e254lct0xzo50mgnujh16x94b&st=4ye50qhy&dl=1", plays: 0 },
    { "title": "Salmo 87", "url": "https://www.dropbox.com/scl/fi/clv9y28zvqmgavy52rjk6/Sal-Tehilim-87-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=5fwkksjm9agacx34hz9u6bh4p&st=w1tthmdr&dl=1", plays: 0 },
    { "title": "Salmo 88", "url": "https://www.dropbox.com/scl/fi/dl5tvqrijm42crm9o1y7u/Sal-Tehilim-88-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=ax72etiui9wbwslitzcbrapfi&st=virzalf5&dl=1", plays: 0 },
    { "title": "Salmo 89", "url": "https://www.dropbox.com/scl/fi/w6h1cz2kfqktrs1deu0xd/Sal-Tehilim-89-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=9oj2gmtb0566pgpzd28mwuivp&st=l6pv7w52&dl=1", plays: 0 },
    { "title": "Salmo 89b", "url": "https://www.dropbox.com/scl/fi/hlronpnvupwgq4cop4bnz/Sal-Tehilim-89-b-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=vv7hxsgi299dbn2ay7mr16vmz&st=ie75puyy&dl=1", plays: 0 },
    { "title": "Salmo 90", "url": "https://www.dropbox.com/scl/fi/7amb4xi26zb6yajwz766a/Sal-Tehilim-90-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=2ze1le8ufk5sn75fmejwx8e1g&st=ns7zr61e&dl=1", plays: 0 },
    { "title": "Salmo 91", "url": "https://www.dropbox.com/scl/fi/486c76vkt9j05mtwi41wr/Sal-Tehilim-91-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=65mgh28t72n59gc32u56vyj4p&st=q1x2gm1s&dl=1", plays: 0 },
    { "title": "Salmo 91b", "url": "https://www.dropbox.com/scl/fi/zfyzs8zamkvdxlcva2hb6/Sal-Tehilim-91-bis-Bilblia-Torah-Viviente-2024-Salmos-del-Rey-David.mp3?rlkey=0yxgb44gzctcto4y5t3cqp92f&st=m7hvpeql&dl=1", plays: 0 },

        // Agrega todos los enlaces restantes de la misma manera...
    ];

    const playlistElement = document.getElementById('playlist');

    playlist.forEach((track, index) => {
        const listItem = document.createElement('a');
        listItem.classList.add('list-group-item', 'list-group-item-action');
        listItem.innerHTML = `${track.title} <span class="badge badge-primary badge-pill">${track.plays}</span>`;
        listItem.href = "#";
        listItem.dataset.index = index;

        const shareButton = document.createElement('button');
        shareButton.classList.add('btn', 'btn-secondary', 'btn-sm', 'ml-2');
        shareButton.textContent = "Compartir";
        shareButton.addEventListener('click', function(e) {
            e.stopPropagation();
            shareTrack(track.url);
        });

        listItem.appendChild(shareButton);
        listItem.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedTrack = playlist[this.dataset.index];
            playAudio(selectedTrack.url, this, index);
            selectedTrack.plays++;
            updatePlayCount(this, selectedTrack.plays);
        });

        playlistElement.appendChild(listItem);
    });

    document.getElementById('shuffleButton').addEventListener('click', function() {
        shufflePlaylist();
    });

    function playAudio(url, listItem, index) {
        const audioContainer = document.createElement('div');
        audioContainer.classList.add('audio-player');

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = url;
        audioContainer.appendChild(audio);

        const equalizer = document.createElement('div');
        equalizer.classList.add('equalizer');
        for (let i = 0; i < 5; i++) {
            const bar = document.createElement('div');
            equalizer.appendChild(bar);
        }
        audioContainer.appendChild(equalizer);

        listItem.appendChild(audioContainer);
        audio.play();

        updateActiveTrack(listItem);

        audio.addEventListener('ended', function() {
            const nextIndex = (index + 1) % playlist.length;
            const nextTrack = playlist[nextIndex];
            const nextListItem = playlistElement.querySelector(`[data-index='${nextIndex}']`);
            playAudio(nextTrack.url, nextListItem, nextIndex);
        });

        audio.addEventListener('play', function() {
            equalizer.style.display = 'flex';
        });

        audio.addEventListener('pause', function() {
            equalizer.style.display = 'none';
        });

        audio.addEventListener('ended', function() {
            equalizer.style.display = 'none';
        });
    }

    function updateActiveTrack(selectedItem) {
        const items = playlistElement.querySelectorAll('.list-group-item');
        items.forEach(item => item.classList.remove('active'));
        selectedItem.classList.add('active');
    }

    function updatePlayCount(listItem, count) {
        listItem.querySelector('.badge').textContent = count;
    }

    function shufflePlaylist() {
        for (let i = playlist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
        }
        playlistElement.innerHTML = '';
        playlist.forEach((track, index) => {
            const listItem = document.createElement('a');
            listItem.classList.add('list-group-item', 'list-group-item-action');
            listItem.innerHTML = `${track.title} <span class="badge badge-primary badge-pill">${track.plays}</span>`;
            listItem.href = "#";
            listItem.dataset.index = index;

            const shareButton = document.createElement('button');
            shareButton.classList.add('btn', 'btn-secondary', 'btn-sm', 'ml-2');
            shareButton.textContent = "Compartir";
            shareButton.addEventListener('click', function(e) {
                e.stopPropagation();
                shareTrack(track.url);
            });

            listItem.appendChild(shareButton);
            listItem.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedTrack = playlist[this.dataset.index];
                playAudio(selectedTrack.url, this, index);
                selectedTrack.plays++;
                updatePlayCount(this, selectedTrack.plays);
            });

            playlistElement.appendChild(listItem);
        });
    }

    function shareTrack(url) {
        if (navigator.share) {
            navigator.share({
                title: 'Reproductor de Música - Salmos del Rey David',
                url: url
            }).then(() => {
                console.log('Gracias por compartir!');
            }).catch(console.error);
        } else {
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = url;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Enlace copiado al portapapeles');
        }
    }
});
