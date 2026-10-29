// CI-J Web Tracking
(function (a, t, i) { var e = "MSCI"; var s = "Analytics"; var o = e + "queue"; a[o] = a[o] || []; var r = a[e] || function (n) { var t = {}; t[s] = {}; function e(e) { while (e.length) { var r = e.pop(); t[s][r] = function (e) { return function () { a[o].push([e, n, arguments]) } }(r) } } var r = "track"; var i = "set"; e([r + "Event", r + "View", r + "Action", i + "Config", i + "Property", i + "User", "initialize", "teardown"]); return t }(i.name); var n = i.name; if (!a[e]) { a[n] = r[s]; a[o].push(["new", n]); setTimeout(function () { var e = "script"; var r = t.createElement(e); r.async = 1; r.src = i.src; var n = t.getElementsByTagName(e)[0]; n.parentNode.insertBefore(r, n) }, 1) } else { a[n] = new r[s] } if (i.user) { a[n].setUser(i.user) } if (i.props) { for (var c in i.props) { a[n].setProperty(c, i.props[c]) } } a[n].initialize(i.cfg) })(window, document, {

	src: "https://rdrect-eur1.mkt.dynamics.com/webtracking/WebTracking/WebTracking.bundle.js",
	name: "MSCI",
	cfg: {

		ingestionKey: "/oQI+n7iCrPur0T1q0fRBxwS1vGXSwXaN6wW9LCNPgI=",
		endpointUrl: "https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9c168c7a-51d2-f111-a04e-000d3a3a0253/notifierpublic/webtracking/events",
		autoCapture: {
			view: true,
			click: true
		},
		orgInfo: {
			orgId: "9c168c7a-51d2-f111-a04e-000d3a3a0253",
			orgTenantId: "c8430de0-72af-49c1-94b1-12d74af35e15",
			orgGeo: "EUR"
		}
	}
});

// CI-J Clarity Analytics Tracking
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "j48rlpihpk");
