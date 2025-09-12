import { UnistylesRuntime } from 'react-native-unistyles';

type UnistylesTheme = ReturnType<(typeof UnistylesRuntime)['getTheme']>;

export type ThemeKeyOrFallback<K extends string, F = never> = K extends keyof UnistylesTheme
    ? keyof UnistylesTheme[K]
    : F;

export type ThemeColor = ThemeKeyOrFallback<'colors'>;

export type ThemeSpacing = ThemeKeyOrFallback<'spacing'>;

export type ThemeRadius = ThemeKeyOrFallback<'radius'>;

export type UnistylesColor = `colors.${ThemeColor & string}`;

export type UnistylesSpacing = `spacing.${ThemeSpacing & string}`;

export type UnistylesRadius = `radius.${ThemeRadius & string}`;

export type UnistylesSize = `size.${ThemeKeyOrFallback<'size'> & string}`;

export type StyleColorProps = {
    backgroundColor?: UnistylesColor;
    borderColor?: UnistylesColor;
    borderBottomColor?: UnistylesColor;
    borderBlockColor?: UnistylesColor;
    borderBlockStartColor?: UnistylesColor;
    borderBlockEndColor?: UnistylesColor;
    borderEndColor?: UnistylesColor;
    borderLeftColor?: UnistylesColor;
    borderRightColor?: UnistylesColor;
    borderStartColor?: UnistylesColor;
    borderTopColor?: UnistylesColor;
    outlineColor?: UnistylesColor;
    shadowColor?: UnistylesColor;
};

export type StyleSpacingProps = {
    margin?: UnistylesSpacing;
    marginBottom?: UnistylesSpacing;
    marginTop?: UnistylesSpacing;
    marginLeft?: UnistylesSpacing;
    marginRight?: UnistylesSpacing;
    marginHorizontal?: UnistylesSpacing;
    marginVertical?: UnistylesSpacing;
    marginEnd?: UnistylesSpacing;
    marginStart?: UnistylesSpacing;
    padding?: UnistylesSpacing;
    paddingBottom?: UnistylesSpacing;
    paddingTop?: UnistylesSpacing;
    paddingLeft?: UnistylesSpacing;
    paddingRight?: UnistylesSpacing;
    paddingHorizontal?: UnistylesSpacing;
    paddingVertical?: UnistylesSpacing;
    paddingEnd?: UnistylesSpacing;
    paddingStart?: UnistylesSpacing;
    gap?: UnistylesSpacing;
    columnGap?: UnistylesSpacing;
    rowGap?: UnistylesSpacing;
};

export type StyleRadiusProps = {
    borderBottomEndRadius?: UnistylesRadius;
    borderBottomLeftRadius?: UnistylesRadius;
    borderBottomRightRadius?: UnistylesRadius;
    borderBottomStartRadius?: UnistylesRadius;
    borderStartEndRadius?: UnistylesRadius;
    borderStartStartRadius?: UnistylesRadius;
    borderEndEndRadius?: UnistylesRadius;
    borderEndStartRadius?: UnistylesRadius;
    borderRadius?: UnistylesRadius;
    borderTopEndRadius?: UnistylesRadius;
    borderTopLeftRadius?: UnistylesRadius;
    borderTopRightRadius?: UnistylesRadius;
    borderTopStartRadius?: UnistylesRadius;
    shadowRadius?: UnistylesRadius;
};
