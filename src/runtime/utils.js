export function addScript(f, b, e, v, n, t, s) {
	if (f.fbq) return f.fbq

	n = f.fbq = function () {
		if (n.callMethod)
			n.callMethod.apply(n, arguments)
		else
			n.queue.push(arguments)
	};

	if (!f._fbq) f._fbq = n;

	n.push = n;
	n.loaded = true;
	n.version = '2.0';
	n.queue = [];

	t = b.createElement(e);
	t.id = 'hiperf-pixel';
	t.async = true;
	t.src = v;

	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s);

	return n;
}