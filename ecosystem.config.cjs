module.exports = {
	apps: [
		{
			name: '3027-agnostic-contpaqi-app',
			script: 'node_modules/next/dist/bin/next',
			args: 'start -p 3027', //running on port 3000
			cwd: './',
			exec_mode: 'fork',
			watch: false
		}
	]
}
