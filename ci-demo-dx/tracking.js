// CI-J Web Tracking        
(function (a, t, i) { var e = "MSCI"; var s = "Analytics"; var o = e + "queue"; a[o] = a[o] || []; var r = a[e] || function (n) { var t = {}; t[s] = {}; function e(e) { while (e.length) { var r = e.pop(); t[s][r] = function (e) { return function () { a[o].push([e, n, arguments]) } }(r) } } var r = "track"; var i = "set"; e([r + "Event", r + "View", r + "Action", i + "Config", i + "Property", i + "User", "initialize", "teardown"]); return t }(i.name); var n = i.name; if (!a[e]) { a[n] = r[s]; a[o].push(["new", n]); setTimeout(function () { var e = "script"; var r = t.createElement(e); r.async = 1; r.src = i.src; var n = t.getElementsByTagName(e)[0]; n.parentNode.insertBefore(r, n) }, 1) } else { a[n] = new r[s] } if (i.user) { a[n].setUser(i.user) } if (i.props) { for (var c in i.props) { a[n].setProperty(c, i.props[c]) } } a[n].initialize(i.cfg) })(window, document, {

	src: "https://rdrect-usa1.mkt.dynamics.com/webtracking/WebTracking/WebTracking.bundle.js",
	name: "MSCI",
	cfg: {

		ingestionKey: "2452789bd41c49efa606bed3dbe84fc2-5d8977a5-95b4-4bcd-bcae-98655e4d76a2-7511",
		endpointUrl: "https://mobile.events.data.microsoft.com/OneCollector/1.0/",
		autoCapture: {
			view: true,
			click: true
		},
		orgInfo: {
			orgId: "13f47eca-d036-f111-83fa-00224808ea33",
			orgTenantId: "8560265c-9715-4ebf-95f3-dfca49c7c6e2",
			orgGeo: "USA"
		}
	}
});

// CI-J Clarity Analytics Tracking
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "j48rlpihpk");
