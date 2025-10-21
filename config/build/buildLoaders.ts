import webpack from 'webpack';

import { BuildOptions } from './types/configs';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  //если не юзать ts, то надо подключить babel
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  return [fileLoader, svgLoader, typeScriptLoader, cssLoader];
};
