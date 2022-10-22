import * as aws from '@aws-sdk/client-ses'
import { v4 as uuidv4 } from 'uuid'
import { EMAIL_FROM } from 'constants/generic'
import nodemailer from 'nodemailer'
import { getHashResetHTML } from 'email/getHashResetHTML'
import { getNewHashHTML } from 'email/getNewHashHTML'
import { getSignupHTML } from 'email/getSignupHTML'
import { getTeamSignupHTML } from 'email/getTeamSignupHTML'
import { getSubscribedHTML } from 'email/getSubscribedHTML'
import { getUpdateEmailHTML } from 'email/getUpdateEmailHTML'
import { getAuthCodeHTML } from 'email/getAuthCodeHTML'

const ses = new aws.SES({
  credentials: {
    accessKeyId: process.env.OWN_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.OWN_AWS_SECRET_ACCESS_KEY
  },
  region: process.env.OWN_AWS_REGION
})

let transporter = nodemailer.createTransport({
  SES: { ses, aws }
})

export const sendUpdateEmailConfirmation = async (to, name, link) => {
  return transporter.sendMail(
    {
      from: EMAIL_FROM,
      to,
      subject: 'Confirm New Address',
      html: getUpdateEmailHTML({ link, name }),
      ses: {
        ConfigurationSetName: 'fullcontextdevelopment'
      },
      attachDataUrls: true
    }
  )
}

export const sendAuthCode = async (to, code) => {
  return transporter.sendMail(
    {
      from: EMAIL_FROM,
      to,
      subject: 'Team Admin Authorization Code',
      html: getAuthCodeHTML({ code }),
      ses: {
        ConfigurationSetName: 'fullcontextdevelopment'
      },
      attachDataUrls: true
    }
  )
}

export const sendNewsletterSignupConfirmation = async (to, confirmLink, unsubLink) => {
  return transporter.sendMail(
    {
      from: EMAIL_FROM,
      to,
      subject: 'Welcome & Confirm Newsletter',
      html: getSubscribedHTML({ confirmLink, unsubLink }),
      ses: {
        ConfigurationSetName: 'fullcontextdevelopment'
      },
      attachDataUrls: true
    }
  )
}

export const sendHashLink = async (to, hash, name, team = false) => {
  const { link } = getEmailActionData('hash', hash)
  const getHtml = team ? getTeamSignupHTML : getSignupHTML
  const subject = team ? 'Team Access Link' : 'Access Link'

  return transporter.sendMail(
    {
      from: EMAIL_FROM,
      to,
      subject,
      html: getHtml({ name, hashLink: link }),
      ses: {
        ConfigurationSetName: 'fullcontextdevelopment'
      },
      attachDataUrls: true
    }
  )
}

export const sendNewHash = async (to, hash, name) => {
  const { link } = getEmailActionData('hash', hash)
  return transporter.sendMail(
    {
      from: EMAIL_FROM,
      to,
      subject: 'New Access Link',
      html: getNewHashHTML({ name, hashLink: link }),
      ses: {
        ConfigurationSetName: 'fullcontextdevelopment'
      },
      attachDataUrls: true
    }
  )
}

export const sendResetHash = async (to, name, link) => {
  return transporter.sendMail(
    {
      from: EMAIL_FROM,
      to,
      subject: 'New Access Link Request',
      html: getHashResetHTML({ name, resetLink: link }),
      ses: {
        ConfigurationSetName: 'fullcontextdevelopment'
      },
      attachDataUrls: true
    }
  )
}

export function getEmailActionData(action, token = null) {
  const id = token || uuidv4()
  const baseUrl = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.fullcontextdevelopment.com'}`
  let link
  if (action === 'confirmSubscribe') {
    link = `${baseUrl}/confirm-subscription?confirmToken=${id}&token=${process.env.EMAIL_TOKEN}`
  }
  if (action === 'unsubscribe') {
    link = `${baseUrl}/unsubscribe?unsubToken=${id}&token=${process.env.EMAIL_TOKEN}`
  }
  if (action === 'hash') {
    link = `${baseUrl}/api/auth/${token}`
  }
  if (action === 'reset') {
    link = `${baseUrl}/api/reset/${id}?token=${process.env.EMAIL_TOKEN}`
  }
  if (action === 'update-email') {
    link = `${baseUrl}/api/update-email/${id}?token=${process.env.EMAIL_TOKEN}`
  }
    
  return { id, link }
}