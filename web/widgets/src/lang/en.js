/**
 * Using per-page grouping for translation key/value pair, the base key corresponds to the page.
 * Common keys for each page:
 *
 * title: Title of the page, shows above of the separator line of the widget
 * description: Description of the page, shows under the separator line of the widget
 * list_item: Exists when the page includes list element, includes title, text or links in the list
 * input: Exists when the page includes input field, includes label and error of the input field
 * button: Exists when the page includes button
 * link: Exists when the page includes link
 * text: Miscellaneous text in the page

 * There is a section for generally used translation at the end.
 **/

export default {
  en: {
    password_strength_indicator: {
      title: {
        password_strength: 'Password strength: ',
        too_weak: 'Too weak',
        ok: 'OK',
        strong: 'Strong'
      },
      description: {
        too_weak: 'You can strengthen your password by mixing with numbers, UPPER case, lower case, symbols.',
        ok: 'OK. It is even better to strengthen your password.',
        strong: 'Awesome. You are good to go.'
      }
    },
    register: {
      title: 'Create an account',
      description: {
        start: 'with the following methods',
        one_time_code_sent: 'One-time code sent to'
      },
      input: {
        label: {
          contact: 'Email or mobile',
          username: 'Username',
          password: 'Password',
          one_time_code: '6-digit verification code'
        },
        error: {
          duplicate_username: 'Username is already taken',
          invalid_username: 'Invalid username',
          invalid_email: 'Invalid email',
          invalid_phone: 'Invalid phone number',
          invalid_contact: 'Invalid contact',
          requires_better_password_strength: 'Requires stronger password',
          sign_in: 'sign in',
          email_already_exists: 'Email is already taken. Please try to {link}.',
          phone_already_exists: 'Phone number is already taken. Please try to {link}.'
        }
      },
      button: {
        register: 'Create account',
        next: 'Next'
      },
      link: {
        privacy_link: 'the privacy policy',
        sign_in: 'Sign In',
        resend_code: 'Resend code'
      },
      text: {
        // privacy_policy: {link} will be replaced by link to privacy policy
        privacy_policy: 'I agree to {link}',
        or: 'OR'
      }
    },
    add_recovery_email: {
      title: 'Recovery email',
      description: 'To make sure you can get back into your account. Add an account recovery email.',
      input: {
        label: {
          recovery_email: 'Recovery email'
        }
      },
      button: {
        next: 'Next'
      }
    },
    verification: {
      title: {
        account_verification: 'Account verification',
        contact_verification: 'Contact verification',
        account_created: 'Account created'
      },
      input: {
        label: {
          verification_code: '6-digit verification code'
        },
        error: {
          too_frequent: 'Request too frequent, please try it again later',
          invalid_verification_code: 'Incorrect verification code'
        }
      },
      button: {
        verify: 'Verify',
        ok: 'OK'
      },
      link: {
        resend_code: 'Resend code',
        verify_later: 'Verify later',
        cancel: 'Cancel'
      },
      text: {
        // contact_verification: {contact} will be replaced by contact which user inputs
        contact_verification: 'A 6-digit verification code is sent to {contact}',
        code_sent: 'Code sent'
      }
    },
    resend_verification: {
      title: 'Resend verification',
      text: {
        // resend_contact_verification: {contact} will be replaced by contact which user inputs
        resend_contact_verification: 'A 6-digit verification code is resent to {contact}'
      }
    },
    sign_in: {
      title: {
        sign_in: 'Sign In',
        continue: 'Sign in',
        two_step_verification: '2-step verification',
        password: 'Password'
      },
      description: {
        continue: 'with the following methods',
        enter_password: 'Enter password to sign in',
        two_step_verification: 'Try another way',
        error: {
          used_contact_in_system: 'The contact has been used in the system but not linked by social platform'
        }
      },
      list_item: {
        title: {
          security_key: 'Security key',
          sms_code: 'SMS code',
          authenticator_app: 'Authenticator App',
          backup_code: 'Backup code'
        },
        text: {
          sms_code: 'Use the 6-digit code sent to your mobile',
          authenticator_app: 'Use the 6-digit code generated by your authentication app',
          backup_code: 'Enter one of your 8-digit backup codes'
        }
      },
      input: {
        label: {
          handle: 'Email, mobile or username',
          contact: 'Email or mobile',
          password: 'Password',
          sms_code: '6-digit verification code',
          authenticator_app: '6-digit verification code',
          backup_code: '8-digit backup code'
        },
        error: {
          create_account: 'create account',
          blank: 'Cannot be blank',
          user_is_locked: 'User is locked',
          user_not_found_not_allow_create_account: 'User is not found',
          user_not_found_allow_create_account: 'User is not found. Please try to {link}.',
          password_not_set: 'Your account is registered with social platform sign-in. Please try one of the supported social platform.',
          incorrect_password: 'Incorrect password',
          invalid_totp_pin: 'Incorrect passcode',
          invalid_sms_code: 'Incorrect SMS code',
          invalid_backup_code: 'Incorrect backup code',
          too_many_authentication_attempts: 'Please try again later'
        }
      },
      button: {
        sign_in: 'Sign In',
        next: 'Next'
      },
      link: {
        forgot_password: 'Forgot password?',
        register: 'Create account',
        try_another_way: 'Try another way',
        resend_verification_code: 'Resend verification code'
      },
      text: {
        or: 'OR',
        password: 'Continue signing in with',
        code_sent: 'Code sent',
        forgot_password: 'If you forgot your password, you can reset it using your 24 characters Recovery Key'
      }
    },
    reset_password: {
      title: {
        reset_password: 'Reset password',
        one_time_code_sent: 'One-time code sent',
        set_new_password: 'Set new password',
        password_changed: 'Password changed'
      },
      input: {
        label: {
          contact: 'Email or mobile',
          password: 'Password',
          confirm_password: 'Confirm password'
        },
        error: {
          blank_contact: 'Contact cannot be blank',
          no_contact: 'Cannot find your account',
          reset_link_expired: 'Reset link is expired'
        }
      },
      button: {
        send_reset_link: 'Send reset link',
        done: 'Done'
      },
      text: {
        email: 'email',
        phone: 'phone',
        reset_link_sent: 'A link to reset your password has been sent to {handle}.',
        send_reset_password_instruction: 'We will send reset password instruction to',
        check_contact_instruction: 'A message is sent to your {contact}. Please check.',
        reset_password_success: 'You have successfully reset your password.  Please proceed to sign in.',
        return_home: 'Return to Sign In',
        error: {
          invalid_reset_password: 'Invalid reset password link',
          reach_limit: 'Sorry you have reached reset password limit, please contact custom service for help.'
        }
      }
    },
    profile: {
      list_item: {
        title: {
          profile: 'Profile',
          contact: 'Contact'
        }
      },
      text: {
        and_more: 'and more'
      }
    },
    profile_edit: {
      title: 'Edit profile',
      input: {
        label: {
          name: 'Name'
        },
        error: {
          not_updated_username: 'Please fill in a new user name.'
        }
      },
      button: {
        save: 'Save',
        ok: 'OK'
      }
    },
    contacts: {
      // title: {contact} will be replaced by contact type, either phone or email
      title: 'Manage your contact',
      button: {
        remove: 'Remove',
        // add_contact: {contact} will be replaced by contact type, either phone or email
        add_contact: 'Manage {contact}'
      },
      list_item: {
        text: {
          verified: 'Verified',
          non_verified: 'Not verified'
        },
        link: {
          set_as_primary: 'Set as primary',
          verify: 'Verify now'
        }
      },
      text: {
        primary: 'Primary',
        email: 'Email',
        phone: 'Phone'
      }
    },
    contact_create: {
      // title: {contact} will be replaced by contact type, either phone or email
      title: 'Manage {contact}',
      input: {
        label: {
          // contact: {contact} will be replaced by contact type, either phone or email
          contact: '{contact}'
        },
        error: {
          too_frequent: 'Request too frequent, please try it again later',
          invalid_contact: 'Invalid {contact}',
          duplicate_contact: 'Contact is already taken'
        }
      },
      button: {
        verify: 'Verify',
        change: 'Change'
      },
      text: {
        email: 'Email',
        phone: 'Phone'
      }
    },
    contact_delete: {
      // title: {contact} will be replaced by contact type, either phone or email
      title: 'Remove {contact}',
      // description: {contact} will be replaced by contact type, either phone or email
      description: 'Are you sure you want to delete this {contact}?',
      button: {
        remove: 'Remove',
        ok: 'OK'
      },
      text: {
        email: 'Email',
        phone: 'Phone'
      }
    },
    contact_update_primary: {
      title: 'Set as primary',
      // description: {contact} will be replaced by contact type, either phone or email
      description: 'Primary {contact} is used to identify your account. <br> Are you sure you want to set this as your primary {contact}?',
      button: {
        ok: 'OK',
        update_primary_contact: 'Set as primary (contact)'
      },
      text: {
        email: 'Email',
        phone: 'Phone'
      }
    },
    settings_home: {
      title: 'Security settings',
      list_item: {
        title: {
          change_password: 'Change password',
          set_password: 'Set password',
          password: 'Password',
          two_step_verification: '2-steps verification',
          devices: 'Devices',
          social_logins: 'Social logins',
          admin: 'Admin portal',
          sign_out: 'Sign out'
        },
        text: {
          off: 'OFF',
          on: 'ON',
          manage_password: 'Manage password',
          change_password: 'Change your password for authentication',
          set_password: 'Set a password for authentication',
          two_step_verification: {
            add: 'Add password to enhance security and enable advance authenticators',
            manage: 'Advanced authentication settings to enhance security'
          },
          devices: 'Manage logged in devices',
          social_logins: 'Manage social logins',
          switch_to_admin: 'Manage users and settings'
        }
      },
      message: {
        success_change_password: 'Change password successfully.'
      }
    },
    set_password: {
      title: 'Set password',
      button: {
        set_password: 'Set password',
        ok: 'OK'
      },
      text: {
        password_set: 'Password set'
      }
    },
    change_password: {
      title: 'Change password',
      input: {
        label: {
          old_password: 'Old password',
          new_password: 'New password',
          confirm_new_password: 'Confirm new password'
        },
        error: {
          invalid_old_password: 'Incorrect old password',
          requires_better_password_strength: 'Requires stronger password',
          invalid_confirm_password: 'Password mismatch'
        }
      },
      button: {
        change_password: 'Change password',
        ok: 'OK'
      },
      text: {
        password_updated: 'Password updated'
      }
    },
    add_password: {
      title: 'Add password',
      description: 'Add password to enhance security for your next login',
      input: {
        label: {
          password: 'Password',
          confirm_password: 'Confirm password'
        }
      },
      button: {
        add_password: 'Add password'
      }
    },
    manage_password: {
      title: 'Manage password',
      description: 'Change or remove your password',
      input: {
        label: {
          password: 'Password'
        }
      },
      button: {
        change_password: 'Change password',
        remove_password: 'Remove password'
      }
    },
    modify_password: {
      input: {
        label: {
          password: 'Password',
          confirm_password: 'Confirm password'
        }
      }
    },
    remove_password: {
      title: 'Remove password',
      description: 'Once password is removed you can only sign in with one-time code.',
      button: {
        remove: 'Remove'
      }
    },
    mfa_list: {
      title: 'Manage 2-step verification',
      description: 'Sign in with one-time code and password',
      list_item: {
        title: {
          password: 'Password',
          authenticator_app: 'Authenticator App'
        },
        text: {
          password: 'Manage password',
          security_key: 'Enable your biometric authentication and USB security keys',
          authenticator_app: {
            create: 'Enable your authenticator app to generate 6-digit one-time code',
            manage: 'Manage your authenticator app'
          },
          // added_on: {date} will be replaced by formatted date
          added_on: 'Added on: {date}',
          // last_generated: {date} will be replaced by formatted date
          last_generated: 'Last generated: {date}'
        }
      }
    },
    manage_authenticator_app: {
      title: 'Manage authenticator app',
      description: '2-step verification is on using Authenticator app',
      message: {
        success_remove_authenticator_app: 'Remove authenticator app successfully.'
      },
      button: {
        remove: 'Remove authenticator app'
      }
    },
    remove_authenticator_app: {
      title: 'Remove authenticator app',
      description: 'Once authenticator app is removed you can only sign in with one-time code and password',
      button: {
        remove: 'Remove authenticator app'
      }
    },
    mfa_totp_create: {
      title: 'Add authenticator app',
      description: {
        scan_qrcode: 'Scan QR Code',
        copy_key: 'Copy the key below to your authenticator app.',
        // time_based_key: {0} will be replaced by bolded wording of Time based
        time_based_key: 'Make sure {0} is turned on.',
        time_based: 'Time based'
      },
      input: {
        label: {
          code: 'Code'
        },
        error: {
          invalid_verification_code: 'Incorrect verification code'
        }
      },
      button: {
        copy: 'Copy',
        copied: 'Copied',
        next: 'Next'
      },
      link: {
        scan_qrcode: 'Scan QR Code',
        input_manually: 'Input manually'
      },
      text: {
        or: 'Or',
        // enter_authenticator_app_code: {0} will be replaced by bolded wording of how many digits of the code
        enter_authenticator_app_code: 'Enter the {0} code generated by your authenticator app'
      }
    },
    devices: {
      title: 'Manage devices',
      list_item: {
        text: {
          // last_active: {date} will be replaced by formatted date
          last_active: 'Last active: {date}',
          this_device: 'This device'
        }
      },
      button: {
        log_out: 'Log out',
        log_out_all_other_devices: 'Log out all other devices'
      }
    },
    device_delete: {
      title: 'Log out device',
      button: {
        log_out: 'Log out',
        ok: 'OK'
      },
      text: {
        log_out_the_following_device: 'Are you sure you want to log out the device shown below?',
        log_out_all_other_devices: 'Are you sure you want to log out all other devices?',
        // last_active: {date} will be replaced by formatted date
        last_active: 'Last active: {date}'
      }
    },
    manage_social_logins: {
      title: 'Manage social logins',
      description: {
        error: {
          used_contact_in_system: 'The contact has been used in the system so cannot link with this social platform'
        }
      },
      list_item: {
        title: {
          google: 'Google',
          facebook: 'Facebook',
          twitter: 'Twitter',
          apple: 'Apple',
          matters: 'Matters'
        },
        text: {
          // last_used: {date} will be replaced by formatted date
          last_used: 'Last used {date}',
          connect_now: 'Connect now'
        }
      },
      button: {
        connect: 'Connect',
        disconnect: 'Disconnect'
      }
    },
    social_login_delete: {
      title: 'Disconnect social login?',
      button: {
        connect: 'Connect',
        disconnect: 'Disconnect',
        ok: 'OK'
      },
      text: {
        // disconnect_with_your_account: {platform} will be replaced by corresponding social platform
        // disconnect_with_your_account: 'Disconnect with your {platform} account?',
        disconnect_with_your_account: 'Are you sure you want to disconnect with the account shown below?',
        keep_one_social_login: 'You should keep at least one social login to access your account',
        google: 'Google',
        facebook: 'Facebook',
        twitter: 'Twitter',
        apple: 'Apple',
        matters: 'Matters'
      }
    },
    error_page: {
      title: 'Try to login with {service}',
      text: {
        description: 'You previously set up an account with {service}. Try to login with {service}.',
        others: 'other factors',
        password: 'password',
        google: 'Google',
        facebook: 'Facebook',
        twitter: 'Twitter',
        apple: 'Sign in with Apple',
        matters: 'Matters'
      }
    },
    social_login_pane_list: {
      text: {
        register: 'Create account with {service}',
        sign_in: 'Sign in with {service}',
        google: 'Google',
        facebook: 'Facebook',
        twitter: 'Twitter',
        apple: 'Apple',
        matters: 'Matters'
      }
    },
    // Section below refers to commonly used translation value for the whole application.
    general: {
      // blank: Javascript blank character, shall be converted into blank character in HTML to show the element without content. Mainly used for consistent spacing.
      blank: '\xa0',
      separator: ' or '
    },
    description: {
      work_in_progress: 'Work in progress',

      // n_digits: {0} will be replaced by how many digits for the code
      n_digits: '{0}-digit',
      verifying: 'Verifying',
      successful: 'Successful',
      // protected_by: Formatted footer
      protected_by: '{start} {logo}{name}'
    },
    button: {
      ok: 'OK',
      confirm: 'Confirm'
    },
    error: {
      unknown: 'Unknown error',
      accept_privacy_policy: 'This item must be checked',
      blank: 'Cannot be blank'
    }
  }
}
