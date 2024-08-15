module.exports = {
    apps: [
        {
            name: 'api',
            script: 'bun',
            args: 'run index.ts',
            cwd: '/app/api',
            watch: true,
        },
        {
            name: 'frontend',
            script: 'bun',
            args: 'run index.ts',
            cwd: '/app/frontend',
            watch: true,
        },
    ],
};
