import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import { resolve } from 'path'
import webpackMerge from 'webpack-merge'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ErrorOverlayWebpackPlugin from 'error-overlay-webpack-plugin'

import commonConfig from './webpack.common'
import { PROJECT_ROOT } from '../constant/env'

const devConfig: Configuration = {
    mode: 'development',
    entry: ['react-hot-loader/patch', resolve(PROJECT_ROOT, 'src', 'index.tsx')],
    plugins: [
        new ForkTsCheckerWebpackPlugin({ memoryLimit: 1024, tsconfig: resolve(PROJECT_ROOT, 'tsconfig.json') }),
        new ErrorOverlayWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
}

export default webpackMerge(commonConfig, devConfig)
