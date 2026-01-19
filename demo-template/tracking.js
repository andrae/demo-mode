// CI-J Web Tracking
(function (a, t, i) {
	var e = "MSCI";
	var s = "Analytics";
	var o = e + "queue";
	a[o] = a[o] || [];
	var r = a[e] || function (n) {
		var t = {};
		t[s] = {};
		function e(e) {
			while (e.length) {
				var r = e.pop();
				t[s][r] = function (e) {
					return function () {
						a[o].push([e, n, arguments]);
					};
				}(r);
			}
		}
		var r = "track";
		var i = "set";
		e([r + "Event", r + "View", r + "Action", i + "Config", i + "Property", i + "User", "initialize", "teardown"]);
		return t;
	}(i.name);
	var n = i.name;
	if (!a[e]) {
		a[n] = r[s];
		a[o].push(["new", n]);
		setTimeout(function () {
			var e = "script";
			var r = t.createElement(e);
			r.async = 1;
			r.src = i.src;
			var n = t.getElementsByTagName(e)[0];
			n.parentNode.insertBefore(r, n);
		}, 1);
	} else {
		a[n] = new r[s];
	}
	if (i.user) {
		a[n].setUser(i.user);
	}
	if (i.props) {
		for (var c in i.props) {
			a[n].setProperty(c, i.props[c]);
		}
	}
	a[n].initialize(i.cfg);
})(window, document, {
	src: "https://cxppeur1rdrect01sa02cdn-endpoint.azureedge.net/webtracking/WebTracking/WebTracking.bundle.js",
	name: "MSCI",
	cfg: {
		ingestionKey: "847445322a91482f857e244bc8c2db58-ce5d4618-3487-473f-8c69-a559483c2b3a-7345",
		endpointUrl: "https://mobile.events.data.microsoft.com/OneCollector/1.0/",
		autoCapture: {
			view: true,
			click: true
		},
		orgInfo: {
			orgId: "191dab3c-87ce-f011-8729-7ced8d76425f",
			orgTenantId: "c8430de0-72af-49c1-94b1-12d74af35e15",
			orgGeo: "EUR"
		}
	}
});

// CI-J Web Tracking
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "j48rlpihpk");
