import { memo, type Ref } from 'react';
import { View, type ViewProps } from 'react-native';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';
import type { StyleColorProps, StyleSpacingProps } from './Box.types';
import { extractColorVariant, extractRadiusVariant, extractSpacingVariant } from './Box.utils';

export const Box = memo(
    ({
        alignItems,
        flexDirection,
        justifyContent,
        alignSelf,
        style,
        ref,
        flex,
        width,
        maxWidth,
        minWidth,
        height,
        maxHeight,
        minHeight,
        backgroundColor,
        borderColor,
        borderBottomColor,
        borderBlockColor,
        borderBlockEndColor,
        borderBlockStartColor,
        borderEndColor,
        borderLeftColor,
        borderRightColor,
        borderStartColor,
        borderTopColor,
        outlineColor,
        shadowColor,
        padding,
        margin,
        marginBottom,
        marginTop,
        marginLeft,
        marginRight,
        marginHorizontal,
        marginVertical,
        marginEnd,
        marginStart,
        paddingBottom,
        paddingTop,
        paddingLeft,
        paddingRight,
        paddingHorizontal,
        paddingVertical,
        paddingEnd,
        paddingStart,
        gap,
        columnGap,
        rowGap,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderTopStartRadius,
        borderTopEndRadius,
        borderBottomStartRadius,
        borderBottomEndRadius,
        borderStartStartRadius,
        borderStartEndRadius,
        borderEndStartRadius,
        borderEndEndRadius,
        shadowRadius,
        borderWidth,
        borderTopWidth,
        borderLeftWidth,
        borderRightWidth,
        borderBottomWidth,
        borderStartWidth,
        borderEndWidth,
        shadowOffsetWidth,
        shadowOffsetHeight,
        shadowOpacity,
        elevation,
        flexWrap,
        overflow,
        borderStyle,
        borderCurve,
        boxSizing,
        display,
        outlineStyle,
        cursor,
        backfaceVisibility,
        position,
        pointerEvents,
        ...props
    }: BoxProps) => {
        styles.useVariants({
            alignItems,
            flexDirection,
            justifyContent,
            alignSelf,
            backgroundColor,
            borderColor,
            borderBottomColor,
            borderBlockColor,
            borderBlockEndColor,
            borderBlockStartColor,
            borderEndColor,
            borderLeftColor,
            borderRightColor,
            borderStartColor,
            borderTopColor,
            outlineColor,
            shadowColor,
            margin,
            marginBottom,
            marginTop,
            marginLeft,
            marginRight,
            marginHorizontal,
            marginVertical,
            marginEnd,
            marginStart,
            padding,
            paddingBottom,
            paddingTop,
            paddingLeft,
            paddingRight,
            paddingHorizontal,
            paddingVertical,
            paddingEnd,
            paddingStart,
            gap,
            columnGap,
            rowGap,
            borderRadius,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
            borderTopStartRadius,
            borderTopEndRadius,
            borderBottomStartRadius,
            borderBottomEndRadius,
            borderStartStartRadius,
            borderStartEndRadius,
            borderEndStartRadius,
            borderEndEndRadius,
            shadowRadius,
            flexWrap,
            overflow,
            borderStyle,
            borderCurve,
            boxSizing,
            display,
            outlineStyle,
            cursor,
            backfaceVisibility,
            position,
            pointerEvents,
        });

        return (
            <View
                ref={ref}
                {...props}
                style={[
                    styles.box({
                        flex,
                        width,
                        height,
                        maxHeight,
                        minHeight,
                        minWidth,
                        maxWidth,
                        borderWidth,
                        borderTopWidth,
                        borderLeftWidth,
                        borderRightWidth,
                        borderBottomWidth,
                        borderStartWidth,
                        borderEndWidth,
                        shadowOffsetWidth,
                        shadowOffsetHeight,
                        shadowOpacity,
                        elevation,
                    }),
                    style,
                ]}
            />
        );
    }
);

Box.displayName = 'Box';

export type BoxProps = UnistylesVariants<typeof styles> &
    ViewProps &
    DynamicStyleProps &
    StyleColorProps &
    StyleSpacingProps &
    OtherProps;

type OtherProps = {
    ref?: Ref<View>;
};

type DynamicStyleProps = {
    flex?: number;
    height?: number;
    maxHeight?: number;
    minHeight?: number;
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    borderWidth?: number;
    borderTopWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderBottomWidth?: number;
    borderStartWidth?: number;
    borderEndWidth?: number;
    shadowOffsetWidth?: number;
    shadowOffsetHeight?: number;
    shadowOpacity?: number;
    elevation?: number;
};

const styles = StyleSheet.create((t: any) => ({
    box: (dynamicProps: DynamicStyleProps) => ({
        ...dynamicProps,

        variants: {
            flexDirection: {
                row: { flexDirection: 'row' },
                column: { flexDirection: 'column' },
                'row-reverse': { flexDirection: 'row-reverse' },
                'column-reverse': { flexDirection: 'column-reverse' },
            },
            alignItems: {
                center: { alignItems: 'center' },
                'flex-start': { alignItems: 'flex-start' },
                'flex-end': { alignItems: 'flex-end' },
                stretch: { alignItems: 'stretch' },
                baseline: { alignItems: 'baseline' },
            },
            justifyContent: {
                center: { justifyContent: 'center' },
                'flex-start': { justifyContent: 'flex-start' },
                'flex-end': { justifyContent: 'flex-end' },
                'space-between': { justifyContent: 'space-between' },
                'space-around': { justifyContent: 'space-around' },
                'space-evenly': { justifyContent: 'space-evenly' },
            },
            alignSelf: {
                auto: { alignSelf: 'auto' },
                center: { alignSelf: 'center' },
                'flex-start': { alignSelf: 'flex-start' },
                'flex-end': { alignSelf: 'flex-end' },
                stretch: { alignSelf: 'stretch' },
                baseline: { alignSelf: 'baseline' },
            },
            flexWrap: {
                wrap: { flexWrap: 'wrap' },
                nowrap: { flexWrap: 'nowrap' },
                'wrap-reverse': { flexWrap: 'wrap-reverse' },
            },
            overflow: {
                visible: { overflow: 'visible' },
                hidden: { overflow: 'hidden' },
            },
            borderStyle: {
                solid: { borderStyle: 'solid' },
                dotted: { borderStyle: 'dotted' },
                dashed: { borderStyle: 'dashed' },
            },
            borderCurve: {
                continuous: { borderCurve: 'continuous' },
                circular: { borderCurve: 'circular' },
            },
            boxSizing: {
                'border-box': { boxSizing: 'border-box' },
                'content-box': { boxSizing: 'content-box' },
            },
            display: {
                none: { display: 'none' },
                flex: { display: 'flex' },
                contents: { display: 'contents' },
            },
            outlineStyle: {
                solid: { outlineStyle: 'solid' },
                dotted: { outlineStyle: 'dotted' },
                dashed: { outlineStyle: 'dashed' },
            },
            cursor: {
                auto: { cursor: 'auto' },
                pointer: { cursor: 'pointer' },
            },
            position: {
                absolute: { position: 'absolute' },
                relative: { position: 'relative' },
                static: { position: 'static' },
            },
            pointerEvents: {
                none: { pointerEvents: 'none' },
                'box-none': { pointerEvents: 'box-none' },
                'box-only': { pointerEvents: 'box-only' },
                auto: { pointerEvents: 'auto' },
            },
            backfaceVisibility: {
                visible: { backfaceVisibility: 'visible' },
                hidden: { backfaceVisibility: 'hidden' },
            },

            backgroundColor: extractColorVariant('backgroundColor', t.colors),
            borderColor: extractColorVariant('borderColor', t.colors),
            shadowColor: extractColorVariant('shadowColor', t.colors),
            outlineColor: extractColorVariant('outlineColor', t.colors),
            borderEndColor: extractColorVariant('borderEndColor', t.colors),
            borderLeftColor: extractColorVariant('borderLeftColor', t.colors),
            borderRightColor: extractColorVariant('borderRightColor', t.colors),
            borderStartColor: extractColorVariant('borderStartColor', t.colors),
            borderTopColor: extractColorVariant('borderTopColor', t.colors),
            borderBottomColor: extractColorVariant('borderBottomColor', t.colors),
            borderBlockColor: extractColorVariant('borderBlockColor', t.colors),
            borderBlockStartColor: extractColorVariant('borderBlockStartColor', t.colors),
            borderBlockEndColor: extractColorVariant('borderBlockEndColor', t.colors),

            margin: extractSpacingVariant('margin', t.spacing),
            marginHorizontal: extractSpacingVariant('marginHorizontal', t.spacing),
            marginVertical: extractSpacingVariant('marginVertical', t.spacing),
            marginBottom: extractSpacingVariant('marginBottom', t.spacing),
            marginTop: extractSpacingVariant('marginTop', t.spacing),
            marginLeft: extractSpacingVariant('marginLeft', t.spacing),
            marginRight: extractSpacingVariant('marginRight', t.spacing),
            marginEnd: extractSpacingVariant('marginEnd', t.spacing),
            marginStart: extractSpacingVariant('marginStart', t.spacing),

            padding: extractSpacingVariant('padding', t.spacing),
            paddingHorizontal: extractSpacingVariant('paddingHorizontal', t.spacing),
            paddingVertical: extractSpacingVariant('paddingVertical', t.spacing),
            paddingBottom: extractSpacingVariant('paddingBottom', t.spacing),
            paddingTop: extractSpacingVariant('paddingTop', t.spacing),
            paddingLeft: extractSpacingVariant('paddingLeft', t.spacing),
            paddingRight: extractSpacingVariant('paddingRight', t.spacing),
            paddingEnd: extractSpacingVariant('paddingEnd', t.spacing),
            paddingStart: extractSpacingVariant('paddingStart', t.spacing),

            gap: extractSpacingVariant('gap', t.spacing),
            columnGap: extractSpacingVariant('columnGap', t.spacing),
            rowGap: extractSpacingVariant('rowGap', t.spacing),

            borderRadius: extractRadiusVariant('borderRadius', t.radius),
            borderTopLeftRadius: extractRadiusVariant('borderTopLeftRadius', t.radius),
            borderTopRightRadius: extractRadiusVariant('borderTopRightRadius', t.radius),
            borderBottomLeftRadius: extractRadiusVariant('borderBottomLeftRadius', t.radius),
            borderBottomRightRadius: extractRadiusVariant('borderBottomRightRadius', t.radius),
            borderTopStartRadius: extractRadiusVariant('borderTopStartRadius', t.radius),
            borderTopEndRadius: extractRadiusVariant('borderTopEndRadius', t.radius),
            borderBottomStartRadius: extractRadiusVariant('borderBottomStartRadius', t.radius),
            borderBottomEndRadius: extractRadiusVariant('borderBottomEndRadius', t.radius),
            borderStartStartRadius: extractRadiusVariant('borderStartStartRadius', t.radius),
            borderStartEndRadius: extractRadiusVariant('borderStartEndRadius', t.radius),
            borderEndStartRadius: extractRadiusVariant('borderEndStartRadius', t.radius),
            borderEndEndRadius: extractRadiusVariant('borderEndEndRadius', t.radius),
            shadowRadius: extractRadiusVariant('shadowRadius', t.radius),
        },
    }),
}));
