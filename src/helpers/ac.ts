// import AccessControl from "accesscontrol";

export const ROLES = {
	administrator : "administrator",
	client        : "client",
};

// // This is actually how the grants are maintained internally.
// const grantsObject = {
// 	[ROLES.administrator] : {
// 		user : {
// 			"create" : ["*"],
// 			"read"   : ["*"],
// 			"update" : ["*"],
// 			"delete" : ["*"],
// 		},
// 	},
// };


// const ac = new AccessControl(grantsObject);

// export default ac;
