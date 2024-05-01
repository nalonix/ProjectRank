// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface ProjectItem {
			name: string,
			id: string
		}
		interface ParameterItem {
			name: string,
			id: string
		}
	}
}

export {
	ProjectItem,
	ParameterItem
};
