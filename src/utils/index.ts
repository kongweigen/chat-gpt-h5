import request from '../utils/request'

const isEmpty = (val: any) => {
  return val === undefined || val === null || val === ''
}

export { isEmpty, request }
