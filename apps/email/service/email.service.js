'use strict'

import {storageService} from './storage.service.js'

const KEY = 'emailDB'


function query() {
    let emails = _loadFromStorage() 
    if(!emails) {
        emails = _createEmail()
        _saveToStorage(emails)
    }
    return Promise.resolve(emails)
}

function _createEmail() {
    return {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt : 1551133930594,
        to: 'momo@momo.com'
        }
}

function _saveToStorage(emails) {
    storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}