type BooleanStringEffect = 'pixelate' | 'blur' | 'cartoonify' | 'gradientFade' | 'sharpen';
type BooleanEffect = 'multiply' | 'negate' | 'grayscale';
type StringEffect = 'background' | 'border';

export type Effect = {
	[K in BooleanStringEffect]?: boolean | string;
} & {
	[K in BooleanEffect]?: boolean;
} & {
	[K in StringEffect]?: string;
};

export type CldProps = {
	effects: Effect[];
	rawTransformations: string[];
};

export type CldPropValueType = Effect | string;

export type CldPropOptions = {
	effects: { label: string; value: Effect }[];
	rawTransformations: { label: string; value: string }[];
};
