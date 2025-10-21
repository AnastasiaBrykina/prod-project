import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/configs';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config?.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));
  config.plugins?.push(
    new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(true) })
  );

  if (!config.module) {
    config.module = { rules: [] };
  }

  config.module.rules = (config.module?.rules || [])
    .map((rule) => {
      if (typeof rule === 'object' && rule && 'test' in rule) {
        if (rule.test instanceof RegExp && rule.test.test('.svg')) {
          return { ...rule, exclude: /\.svg$/i };
        }
      }
      return rule;
    })
    .filter(Boolean) as RuleSetRule[];

  config.module?.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
