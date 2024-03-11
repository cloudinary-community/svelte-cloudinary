<script lang="ts">
	import { browser } from '$app/environment';
	import Search from './Search.svelte';
	const currentTheme = browser && localStorage.getItem('theme');
</script>

<div
	class="
  sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100
  bg-base-100 text-base-content
  "
>
	<nav class="navbar w-full">
		<div class="flex flex-1 md:gap-1 lg:gap-2">
			<span
				class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
				data-tip="Menu"
				><label
					aria-label="Open menu"
					for="drawer"
					class="btn btn-square btn-ghost drawer-button lg:hidden"
					><svg
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					></label
				></span
			>
			<div class="flex items-center gap-2 lg:hidden">
				<a
					href="/"
					aria-current="page"
					aria-label="Homepage"
					class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2"
					data-svelte-h="svelte-11qcss2"
				>
					<div class="font-title inline-flex text-lg md:text-2xl">
						<div class="flex items-start flex-row justify-between">
							<img src="/logo.svg" width="24" alt="svelte cloudinary" />
							<span class="font-bold capitalize ml-2 text-sm"
								>Svelte <span class="text-[#3448c5]">Cloudinary</span></span
							>
						</div>
					</div></a
				>
			</div>
		</div>
		<div class="flex flex-row items-center">
			<div class="hidden md:flex">
				<Search />
			</div>
			<span
				class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
				data-tip="Change Theme"
			>
				<label
					class="swap swap-rotate
				btn btn-ghost drawer-button btn-square normal-case"
				>
					<input
						type="checkbox"
						data-toggle-theme="night,light"
						data-act-class="ACTIVECLASS"
						checked={currentTheme === 'light'}
					/>
					<svg
						class="swap-on fill-current w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/>
					</svg>
					<svg
						class="swap-off fill-current w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/>
					</svg>
				</label>
			</span>
			<span
				class="hidden md:block tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
				data-tip="Twitter: @matiasfha"
			>
				<a
					href="https://twitter.com/matiasfha"
					rel="noopener noreferrer"
					target="_blank"
					class="btn btn-ghost drawer-button btn-square normal-case"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="icon"
						data-v-22569e45=""
						style=""
						width="20"
						height="20"
						viewBox="0 0 512 512"
						data-v-e610b8e3=""
						><path
							fill="currentColor"
							d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"
						/></svg
					>
				</a>
			</span>
			<span
				class="hidden md:block tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
				data-tip="Github"
			>
				<a
					aria-label="Github"
					target="_blank"
					href="https://github.com/cloudinary-community/svelte-cloudinary"
					rel="noopener, noreferrer"
					class="btn btn-ghost drawer-button btn-square normal-case"
					><svg
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
						><path
							d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
						/></svg
					></a
				>
			</span>
		</div>
	</nav>
</div>
