import terser from '@rollup/plugin-terser';
import license from 'rollup-plugin-license';
import pkg from './package.json' with { type: 'json' };

const basicOutputConfig = {
    format: 'umd',
    name: 'fluidScroll',
    plugins: [
        license({
            banner: { content: { file: 'LICENSE.txt' } }
        })
    ]
};

export default [
    {
        input: `src/${pkg.name}.js`,
        output: [
            { ...basicOutputConfig, file: `dist/${pkg.name}.umd.js` },
            {
                ...basicOutputConfig,
                file: `dist/${pkg.name}.umd.min.js`,
                plugins: [terser(), ...basicOutputConfig.plugins]
            }
        ]
    },
    {
        input: 'src/index.js',
        output: {
            ...basicOutputConfig,
            format: 'es',
            file: `dist/${pkg.name}.esm.mjs`
        }
    }
];
