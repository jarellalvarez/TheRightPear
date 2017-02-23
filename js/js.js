$(document).ready(function() {
            $("#overinfo").click(function() {
                $("#descinfo").toggle();
            });
            $("#oninfo").click(function() {
                $("#descon").toggle();
            });
            $("#ininfo").click(function() {
                $("#descin").toggle();
            });
            $("#openinfo").click(function() {
                $("#descopen").toggle();
            });
            $(".infographbut").click(function() {
                $("#descopen").toggle();
            });
            $(".recommendbut").click(function() {
                $("#descopen").toggle();
            });
            $(".infographbut").click(function() {
                $("#infogdesc").toggle();
            });
            $(".recommendbut").click(function() {
                $("#recinfo").toggle();
            });
          });


            var commute = document.getElementById("commute");
            var monitor = document.getElementById("monitor");
            var fitness = document.getElementById("fitness");
            var gaming = document.getElementById("gaming");
            var black = document.getElementById("black");
            var coloured = document.getElementById("coloured");
            var overear = document.getElementById("overear");
            var inear = document.getElementById("inear");
            var openback = document.getElementById("openback");
            var onear = document.getElementById("onear");
            var time = document.getElementById("time");
            var budgetform = document.getElementById("budgetform");
            var surveyfin = document.getElementById("surveyfin");
            var newerimg = document.getElementById("newerimg");
            var landpage = document.getElementById("landpage");
            var begin = document.getElementById("begin");
            var activity = document.getElementById("activity");
            var surv = document.getElementById("surv");
            var reset = document.getElementById("reset");
            var reset1 = document.getElementById("reset1");
            var reset2 = document.getElementById("reset2");
            var reset3 = document.getElementById("reset3");
            var fnext = document.getElementById("fnext");
            var recommends = document.getElementById("recommends");
            var backactiv = document.getElementById("backactiv");
            var rest = document.getElementById("rest");
            var prevchoice = document.getElementById("prevchoice");
            var backactivate = document.getElementById("backactivate");
            var jazzfact1 = document.getElementById("jazzfact1");
            var nextjazz = document.getElementById("nextjazz");

            var survey = {
                activity: [false, false, false, false],
                color: 0,
                headtype: 0,
                hours: 5,
                budget: 6
            };

            var choices = [
                "Congrats you got Sennheiser Momentum 2.0!  Your choices were: Commute, Black/White, Over-Ear, 3hrs+, and $200+",
                "Congrats you got Sony Over Ear Extra Bass!  Your choices were: Commute, Black/White, Over-Ear, 2hrs, and $100-200",
                "Congrats you got Audio Technica M40x!  Your choices were: Monitor, Black/White, Over-Ear, 3hrs+, and $100-200",
                "Congrats you got Urbanite On-Ear!  Your choices were: Monitor, Black/White, Over-Ear, 3hrs+, and $100-200",
                "Congrats you got Razer Kraken!  Your choices were: Gaming, Colored, Over-Ear, 1-2hrs, and $100 and below",
                "Congrats you got Sennheiser 598!  Your choices were: Monitor, Coloured, Over-Ear, 3hrs+, and $200+",
                "Congrats you got Sennheiser HD201!  Your choices were: Gaming, Black/White, Over-Ear, 1hr and below, and $100-200",
                "Congrats you got AKG Y50!  Your choices were: Monitor, Coloured, On-Ear, 1-2hrs, and  $100 and below",
                "Congrats you got Hifiman HE400i!  Your choices were: Monitor, Black/White, Open-Back, 3hrs+, and $200+",
                "Congrats you got Vmoda Crossfade!  Your choices were: Gaming, Coloured, Over-Ear, 2hrs+, and $200+",
                "Congrats you got Plantronics Backbeats Go 2!  Your choices were: Fitness, Black/White, In-Ear, 1-2hrs+, and $100-200",
                "Congrats you got Jaybirds x2!  Your choices were: Fitness, Coloured, In-Ear, 2hrs+, and $100-200",
                "Congrats you got Panasonic Ergo Fit!  Your choices were: Commute, Coloured, In-Ear, 1-2hrs+, and $100 and below",
                "Congrats you got Samson SR850!  Your choices were: Monitor, Black/White, Open-Back, 3hrs+, and $200+",
                "Congrats you got Sennheiser HD800!  Your choices were: Monitor, Black/White, Open-Back, 3hrs+, and $200+",
                "Congrats you got Beyerdynamic MMx300!  Your choices were: Monitor, Coloured, Over-Ear, 3hrs+, and $200+",
                "Congrats you got Grado prestige SR80E!  Your choices were: Gaming, Black/White, Open-Back, 3hrs+, and $100-200",
                "Congrats you got Aukey Bluetooth V4.1!  Your choices were: Exercise, Black/White, In-Ear, 1-2hrs+, and $100 and below",
                "Congrats you got AiAiAi!  Their headphones are fully moddable, meaning you have the freedom of choice! Have fun!",

            ];
            reset.onclick = function() {
                window.location.reload();
            };

            reset1.onclick = function() {
                window.location.reload();
            };
            reset2.onclick = function() {
                window.location.reload();
            };
            reset3.onclick = function() {
                window.location.reload();
            };
            fanext.onclick = function() {
                headtype.style.display = "none";
                rest.style.display = "block";
            };
            fnext.onclick = function() {
                recommends.style.display = "none";
                headtype.style.display = "block";
            };
            backactiv.onclick = function() {
                headtype.style.display = "none";
                recommends.style.display = "block";
            };
            backactivate.onclick = function() {
                rest.style.display = "none";
                headtype.style.display = "block";
            }
            commute.onclick = function() {
                survey.activity[0] = true;
            };

            monitor.onclick = function() {
                survey.activity[1] = true;
            };


            fitness.onclick = function() {
                survey.activity[2] = true;
            };

            gaming.onclick = function() {
                survey.activity[3] = true;
            };

            black.onclick = function() {
                survey.color = 1;
            };

            coloured.onclick = function() {
                survey.color = 2;
            };

            overear.onclick = function() {
                survey.headtype = 0;
            };

            inear.onclick = function() {
                survey.headtype = 1;
            };

            openback.onclick = function() {
                survey.headtype = 2;
            };

            onear.onclick = function() {
                survey.headtype = 3;
            };

            time.onchange = function() {
                survey.hours = this.value;
            };


            budgetform.onchange = function() {
                survey.budget = this.value;
            };

            surveyfin.onclick = function() {
                rest.style.display = "none";
                results.style.display = "block";


                if (survey.activity[0] == true && survey.color == 1 && survey.headtype == 0 && survey.hours == 15 && survey.budget == 18) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://d2uzn5w1stolz2.cloudfront.net/images/momentum-over-ear-wireless/Momentum_wireless_model_black.png"
                    newimg.style.width = "400px";
                    var a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Sennheiser-Momentum-Around-Galaxy-Black/dp/B00SL2ZYFU";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[0]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[0] == true && survey.color == 1 && survey.headtype == 0 && survey.hours == 10 && survey.budget == 12) {
                    var newimg = document.createElement("img");
                    newimg.src = "https://multimedia.bbycastatic.ca/multimedia/products/500x500/103/10325/10325150.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "http://www.bestbuy.ca/en-CA/product/sony-sony-over-ear-sound-isolating-bluetooth-headphones-mdrxb950bt-black-mdrxb950bt/10325150.aspx";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[1]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[1] == true && survey.color == 1 && survey.headtype == 0 && survey.hours == 15 && survey.budget == 12) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://www.wirerealm.com/wp-content/uploads/2014/04/Audio-Technica-ATH-M40X-Studio-Headphones-1.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Audio-Technica-ATH-M40x-Professional-Headphones/dp/B00HVLUR54/ref=sr_1_2?ie=UTF8&qid=1463463253&sr=8-2&keywords=audio+technica+ath+m50x";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[2]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[0] == true && survey.color == 1 && survey.headtype == 3 && survey.hours == 15 && survey.budget == 12) {
                    var newimg = document.createElement("img");
                    newimg.src = "https://images-na.ssl-images-amazon.com/images/I/71ndwJlwW1L._SY355_.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Audio-Technica-ATH-M40x-Professional-Headphones/dp/B00HVLUR54/ref=sr_1_2?ie=UTF8&qid=1463463253&sr=8-2&keywords=audio+technica+ath+m50x";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[3]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[3] == true && survey.color == 2 && survey.headtype == 0 && survey.hours == 5 && survey.budget == 6) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://www.benchx.com/images/Reviews/Razer%20Kraken/razer-kraken-pro-6-800x800-green.png";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Razer-Kraken-Playstation-Music-Headset/dp/B00LN0O0VG";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[4]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[1] == true && survey.color == 2 && survey.headtype == 2 && survey.hours == 15 && survey.budget == 18) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://inspiringheadphones.com/wp-content/uploads/2015/06/hd598_sennheiser.png";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Sennheiser-HD-598-Headphones-Accents/dp/B0042A8CW2/ref=sr_1_1?s=electronics&ie=UTF8&qid=1463463478&sr=1-1&keywords=sennheiser+hd+598";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[5]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[3] == true && survey.color == 1 && survey.headtype == 2 && survey.hours == 5 && survey.budget == 6) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://shoppingway.co.uk/blog/wp-content/uploads/2013/05/hifi_sennheiser_hd_201.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Sennheiser-Lightweight-Over-Ear-Binaural-Headphones/dp/B0007XJSQC/ref=sr_1_1?s=electronics&ie=UTF8&qid=1463463565&sr=1-1&keywords=sennheiser+hd+201";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[6]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[0] == true && survey.color == 2 && survey.headtype == 3 && survey.hours == 10 && survey.budget == 6) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://static.trustedreviews.com/94/000030bcd/769d/akg-y50-2.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Y50-Headphones-One-Button-Universal-Black/dp/B00LPR9JZY";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[7]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[3] == true && survey.color == 1 && survey.headtype == 2 && survey.hours == 5 && survey.budget == 18) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://4.bp.blogspot.com/-LiD4_uPFpA4/UZXE0qqDtFI/AAAAAAAAA6w/cUAFJDRiaVc/s1600/HiFiMan+HE400-C.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/HIFIMAN-HE400S-Full-Size-Magnetic-Headphone/dp/B00Y2EOI94/ref=sr_1_1?s=electronics&ie=UTF8&qid=1463463981&sr=1-1&keywords=he400";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[8]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[3] == true && survey.color == 1 && survey.headtype == 0 && survey.hours == 15 && survey.budget == 18) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://v-moda.com/content/images/m-100/M-100_screen_shadow_laying_case.png";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/V-MODA-Crossfade-Over-Ear-Noise-Isolating-Headphone/dp/B00HYH7HXA/ref=sr_1_sc_1?s=electronics&ie=UTF8&qid=1463464002&sr=1-1-spell&keywords=vmoda+crossface";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[9]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[2] == true && survey.color == 1 && survey.headtype == 1 && survey.hours == 10 && survey.budget == 6) {
                    var newimg = document.createElement("img");
                    newimg.src = "https://media.metropolitant.com/uploads/2013/11/Screen-Shot-2013-11-21-at-12.17.36-am-500x307.png";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "http://www.bestbuy.ca/en-CA/product/plantronics-plantronics-backbeat-go-2-bluetooth-in-ear-headphones-with-charging-case-black-back-beat-go2-bk-pch/10260792.aspx";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[10]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[2] == true && survey.color == 2 && survey.headtype == 1 && survey.hours == 15 && survey.budget == 12) {
                    var newimg = document.createElement("img");
                    newimg.src = "https://i.ytimg.com/vi/BP-HiP-LuF4/maxresdefault.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "http://www.bestbuy.ca/en-CA/product/jaybird-jaybird-x2-in-ear-sound-isolating-bluetooth-headphones-midnight-black-x2-m/10385453.aspx";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[11]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[0] == true && survey.color == 2 && survey.headtype == 1 && survey.hours == 10 && survey.budget == 6) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://g-ecx.images-amazon.com/images/G/01/aplusautomation/vendorimages/2a4fc006-6754-4246-9207-ad3a6abba8cc.jpg._CB314056227_.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Panasonic-RP-HJE120-K-Earbud-Ergo-Fit-Headphone/dp/B007ZRJVA6";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[12]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[1] == true && survey.color == 1 && survey.headtype == 2 && survey.hours == 10 && survey.budget == 6) {
                    var newimg = document.createElement("img");
                    newimg.src = "https://studiospares.s3.amazonaws.com/p/l/388550.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Samson-SR850-Professional-Reference-Headphones/dp/B002LBSEQS/ref=sr_1_1?s=musical-instruments&ie=UTF8&qid=1463464524&sr=1-1&keywords=Samson+SR850";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[13]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[1] == true && survey.color == 1 && survey.headtype == 2 && survey.hours == 15 && survey.budget == 18) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://ecx.images-amazon.com/images/I/81gyce0iyNL._SL1500_.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Sennheiser-HD800-Over-Ear-Circum-Aural-Headphone/dp/B001OTZ8DA";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[14]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[3] == true && survey.color == 2 && survey.headtype == 1 && survey.hours == 15 && survey.budget == 18) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://frontrowelectronics.typepad.com/.a/6a0120a6860947970b01bb083d5c18970d-800wi";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Beyerdynamic-Premium-Digital-Headset-Microphone/dp/B001BYMZ5W/ref=sr_1_1?s=musical-instruments&ie=UTF8&qid=1463464689&sr=8-1&keywords=Beyerdynamic+MMx300";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[15]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[3] == true && survey.color == 1 && survey.headtype == 2 && survey.hours == 15 && survey.budget == 12) {
                    var newimg = document.createElement("img");
                    newimg.src = "https://c2.staticflickr.com/6/5540/14327772548_68a659e322_b.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/Grado-Prestige-Series-SR80e-Headphones/dp/B00L1LXOWS";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[16]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else if (survey.activity[2] == true && survey.color == 1 && survey.headtype == 1 && survey.hours == 10 && survey.budget == 6) {
                    var newimg = document.createElement("img");
                    newimg.src = "http://ecx.images-amazon.com/images/I/61iskuTB6GL.jpg";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://www.amazon.ca/dp/B01CYF9CYS?psc=1";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[17]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);
                } else {
                    var newimg = document.createElement("img");
                    newimg.src = "http://static1.squarespace.com/static/50271a61c4aab6c54f9af5ee/t/5557da88e4b028241f153f59/1431820937900/";
                    newimg.style.width = "400px";
                    a = document.createElement('a');
                    a.href = "https://aiaiai.dk/";
                    newerimg.appendChild(a);
                    a.target = "_blank";
                    a.appendChild(newimg);
                    var chosenp = document.createElement("p")
                    var node = document.createTextNode(choices[18]);
                    chosenp.appendChild(node);
                    prevchoice.appendChild(node);

                };
            };
