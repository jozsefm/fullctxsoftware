import { SESSION_ERROR } from "./sessionResponseHelper"

export const CLIENT_ERROR = `Something bad happened that should be impossible! Please contact support if this error persits.`
export const SERVER_ERROR = `An unexpected issue happened on the backend system! Please contact support if the problem persits.`

const INVITE_ERROR =  `Something was wrong with your invitation data, please make sure it was not used before or didn't expire.`

export const errorMap = {
  '001': 'Failed to log in. Please check your access link.',
  '002': CLIENT_ERROR,
  '003': CLIENT_ERROR,
  '004': CLIENT_ERROR,
  '005': CLIENT_ERROR,
  '006': CLIENT_ERROR,
  '007': CLIENT_ERROR,
  '008': SERVER_ERROR,
  '009': CLIENT_ERROR,
  '010': SERVER_ERROR,
  '011': CLIENT_ERROR,
  '012': SERVER_ERROR,
  '013': SERVER_ERROR,
  '014': SERVER_ERROR,
  '015': CLIENT_ERROR,
  '016': `You can't use a burner or low-reputation email address to sign up.`,
  '017': CLIENT_ERROR,
  '018': CLIENT_ERROR,
  '019': CLIENT_ERROR,
  '020': SESSION_ERROR,
  '021': CLIENT_ERROR,
  '023': SESSION_ERROR,
  '022': SERVER_ERROR,
  '024': SERVER_ERROR,
  '025': `Please confirm your account before logging in by using the link we sent to your email address. If you didn't receive one try to resend it from the login menu.`,
  '026': `Please confirm your account before resetting your password by using the link we sent to your email address. If you didn't receive one try to resend it from the login menu.`,
  '027': `Too many attempts were made. Please wait before trying again.`,
  '028': `The link you used has already expired, please request a new one from the login menu.`,
  '029': SERVER_ERROR,
  '030': 'You tried to use an already used password reset link. Please request a new one or in case of issues contact support.',
  // THIS IS UNUSED BELOW
  '031': `You are already logged in on 4 devices, that's the maximum for a single account. Please log out on one of them and try again.`,
  '032': CLIENT_ERROR,
  '033': SERVER_ERROR,
  '034': CLIENT_ERROR,
  '035': SERVER_ERROR,
  '036': CLIENT_ERROR,
  '037': CLIENT_ERROR,
  '038': CLIENT_ERROR,
  '039': CLIENT_ERROR,
  '040': CLIENT_ERROR,
  '041': 'This organization handler is already taken. Please choose another one.',
  '042': CLIENT_ERROR,
  '043': CLIENT_ERROR,
  '044': CLIENT_ERROR,
  '045': CLIENT_ERROR,
  '046': CLIENT_ERROR,
  '047': CLIENT_ERROR,
  '048': CLIENT_ERROR,
  '049': CLIENT_ERROR,
  '050': CLIENT_ERROR, // Non existing team
  '051': SERVER_ERROR, // Database error while getting the team data
  '052': CLIENT_ERROR, // Non existing team
  '053': CLIENT_ERROR, // Non existing organization
  '054': SERVER_ERROR, // Database error while getting the organization data,
  '055': `Please accept your invitation before resetting your password by using the link we sent to your email address. If you didn't receive one get in touch with the team admin.`,
  '056': INVITE_ERROR, // Used or non existing invite token
  '057': SERVER_ERROR, // Database error while fetching invited user data
  '058': SERVER_ERROR, // The team stored for invited user doesn't exists
  '059': SERVER_ERROR, // Error while querying the team for invited user
  '060': INVITE_ERROR, // Expired invitation link
  '061': SERVER_ERROR, // Failed to update the DB to store the acceptance of an invitation
  '062': CLIENT_ERROR, // Listed team member wasn't found in the database by memberId
  '063': SERVER_ERROR, // Database error while fetching team data
  '064': `Your admin rights to this team has been revoked so you can't do this anymore.`, // Unauthorized attempt to invite team members
  '065': `We faced technical difficulties, please try again later or contact support.`, // Failed to remove a user from a team
  '066': `The admin of your team has removed your rights to access the services.`,
  '067': SERVER_ERROR, // Database error while resending the invite
  '068': SERVER_ERROR, // Database error while updating admin rights of a user
  '069': SERVER_ERROR, // Database error while updating admin rights of a user
  '070': SERVER_ERROR, // Database error while updating admin rights of a user
  '071': SERVER_ERROR, // Database error while checking if the team handler is unique in a given organization
  '072': SERVER_ERROR, // Database error while updating team name
  '073': SERVER_ERROR, // Failed gathering org members by combining the data from the DB, maybe data corruptions.
  '074': SERVER_ERROR, // Database error while updating organization name
  '075': CLIENT_ERROR, // The user to remove doesn't exist in the database
  '076': CLIENT_ERROR, // No user session was found in the DB for the ref from request session
  '077': SERVER_ERROR, // Database error while checking own user authorization
  '078': CLIENT_ERROR, // User accountId stored in Fauna doesn't match accountId in session
  '079': SERVER_ERROR, // Database error while updating username
  '080': SERVER_ERROR, // Failed to deliver the email
  '081': `There's already an account registered with this address. Please use another one.`, // At updating email address the new one is in use in the same org/team situation as the current account
  '082': CLIENT_ERROR, // Signup data checking found some issues
  '083': `You are already subscibed to the newsletter! Thanks for being around! However if you think this is a mistake, please contact support!`,
  '084': 1, // Failed to subscribe to the newsletter
  '085': 1, // Failed to unsubscribe from the newsletter
  '086': 2, // Used an invalid email token for confirming newsletter subscription
  '087': 3, // The confirmToken for newsletter subscription doesn't exist in the database
  '088': CLIENT_ERROR, // Didn't find the user in the database while querying profile information
  '089': SERVER_ERROR, // Error while getting the user from the database while querying profile information
  '090': CLIENT_ERROR, // No Discord Invite was stored in the DB for the user.
  '091': CLIENT_ERROR, // The user to delete was not found in Fauna
  '092': SERVER_ERROR, // Either Fauna or Dynamo died during user account deletion
  '093': 'You are already logged in from the maximum number of allowed devices, please log out elsewhere to be able to access the book from here.',
  '094': 'Invalid access code', //  Invalid hash used to attempt login
  '095': SERVER_ERROR, //  Various database errors at hash reset sending
  '096': SERVER_ERROR, //  Failed to deliver hash reset request email to recipient
  '097': SERVER_ERROR, //  Failed to create team admin authorization code
  '098': CLIENT_ERROR, //  Bad request of submitted auth code
  '099': CLIENT_ERROR, //  Attack attempt
  '100': SERVER_ERROR, //  Failed to set session cookie after login
  '101': SERVER_ERROR, //  Failed to set team-auth in session cookie after validation
}