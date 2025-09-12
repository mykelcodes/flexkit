import type {
    StyleColorProps,
    StyleRadiusProps,
    StyleSpacingProps,
    ThemeColor,
    ThemeRadius,
    ThemeSpacing,
    UnistylesColor,
    UnistylesRadius,
    UnistylesSpacing,
} from './Box.types';

export const extractColorVariant = (
    styleProp: keyof StyleColorProps,
    colorObject: { [key in ThemeColor]: string }
) => {
    return Object.entries(colorObject).reduce(
        (acc, [key, value]) => {
            const propKey = `colors.${key}` as UnistylesColor;
            acc[propKey] = { [styleProp]: value };
            return acc;
        },
        {} as Record<UnistylesColor, Record<string, string>>
    );
};

export const extractSpacingVariant = (
    styleProp: keyof StyleSpacingProps,
    spacingObject: { [key in ThemeSpacing]: number }
) => {
    return Object.entries(spacingObject).reduce(
        (acc, [key, value]) => {
            const propKey = `spacing.${key}` as UnistylesSpacing;
            acc[propKey] = { [styleProp]: value };
            return acc;
        },
        {} as Record<UnistylesSpacing, Record<string, number>>
    );
};

export const extractRadiusVariant = (
    styleProp: keyof StyleRadiusProps,
    radiusObject: { [key in ThemeRadius]: number }
) => {
    return Object.entries(radiusObject).reduce(
        (acc, [key, value]) => {
            const propKey = `radius.${key}` as UnistylesRadius;
            acc[propKey] = { [styleProp]: value };
            return acc;
        },
        {} as Record<UnistylesRadius, Record<string, number>>
    );
};
