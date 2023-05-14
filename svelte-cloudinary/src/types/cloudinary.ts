import type { CldUploadWidgetPropsOptions } from '$lib/components/CldUploadWidgetTypes.js';

export type ResultCallback = (error: any, result: ResultsEvents) => void;
export type CreateUploadWidgetProps = {
	cloudName: string;
	uploadPreset?: string; // @TODO this should be optional if signature is present
	apiKey?: string;
} & CldUploadWidgetPropsOptions;

export type ResultsEvents =
	| { event: 'abort'; info: { ids: string[]; all: boolean } }
	| { event: 'batch-cancelled'; info: { reason: 'MAX_EXCEEDED' | 'INVALID_PUBLIC_ID' } }
	| { event: 'close' }
	| { event: 'display-changed'; info: 'show' | 'hidden' | 'minimized' | 'expanded' }
	| { event: 'publicid'; info: { id: string } }
	| { event: 'queues-end'; info: Record<string, unknown> }
	| { event: 'queues-start' }
	| {
			event: 'retry';
			info: {
				ids: string[];
				all: boolean;
			};
	  }
	| {
			event: 'show-completed';
			info: {
				items: [
					{
						id: string;
						name: string;
						size: number;
						type: string;
						done: boolean;
						progress: number;
						file: Record<string, unknown>;
						uploadInfo: Record<string, unknown>;
					}
				];
			};
	  }
	| {
			event: 'source-changed';
			info: { source: string };
	  }
	| {
			event: 'success';
			info: Record<string, unknown>;
	  }
	| {
			event: 'tags';
			info: {
				tags: string[];
			}; //tags currently in the field
	  }
	| {
			event: 'upload-added';
			info: {
				file: {
					lastModified: string;
					lastModifiedDate: string;
					name: string;
					size: number;
					type: string;
				};
				publicId: 'public-id';
			};
	  };
export interface UploadWidget {
	open: (_?: any, { files }?: { files?: [URL] }) => void;
	close: ({ quiet }: { quiet: boolean }) => void;
	update: (options: CldUploadWidgetPropsOptions) => void;
	hide: () => void;
	show: () => void;
	minimize: () => void;
	destroy: ({ removeThumbnails }: { removeThumbnails: boolean }) => void;
	isShowing: () => boolean;
	isMinimized: () => boolean;
	isDestroyed: () => boolean;
}
