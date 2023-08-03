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
					><svg
						class="h-6 w-6 md:h-8 md:w-8"
						width="32"
						height="32"
						viewBox="0 0 415 415"
						xmlns="http://www.w3.org/2000/svg"
						><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5" /><circle
							cx="207.5"
							cy="135"
							r="130"
							fill="black"
							fill-opacity=".3"
						/><circle cx="207.5" cy="135" r="125" fill="white" /><circle
							cx="207.5"
							cy="135"
							r="56"
							fill="#FF9903"
						/></svg
					>
					<div class="font-title inline-flex text-lg md:text-2xl">
						<span class="font-bold">Svelte Cloudinary</span>
					</div></a
				>
			</div>
		</div>
		<div class="flex-0">
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost rounded-btn">
Theme
				</label>
				<ul
					tabindex="0"
					class="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 mt-4"
				>
					<li><button data-set-theme="lofi" data-act-class="[&_svg]:visible">Light</button></li>
					<li><button data-set-theme="black" data-act-class="[&_svg]:visible">Dark</button></li>
				</ul>
			</div>
		</div>
		<span
			class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
			data-tip="GitHub"
			data-svelte-h="svelte-j52hjb"
			><div class="flex-none items-center">
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
			</div>
		</span>
	</nav>
</div>
