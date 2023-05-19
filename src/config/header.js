import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/header/${name}`)

export const headerImages = [
  {
    id: 'header1',
    name: '头部1',
    src: getImgUrl('header1.png'),
    attr: { w: 1920, h: 103 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header2',
    name: '头部2',
    src: getImgUrl('header2.png'),
    attr: { w: 1920, h: 90 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header3',
    name: '头部3',
    src: getImgUrl('header3.png'),
    attr: { w: 1920, h: 80 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header4',
    name: '头部4',
    src: getImgUrl('header4.png'),
    attr: { w: 1920, h: 126 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header5',
    name: '头部5',
    src: getImgUrl('header5.png'),
    attr: { w: 1920, h: 254 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header6',
    name: '头部6',
    src: getImgUrl('header6.png'),
    attr: { w: 1920, h: 76 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header7',
    name: '头部7',
    src: getImgUrl('header7.png'),
    attr: { w: 1920, h: 101 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header8',
    name: '头部8',
    src: getImgUrl('header8.png'),
    attr: { w: 1876, h: 58 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header9',
    name: '头部9',
    src: getImgUrl('header9.png'),
    attr: { w: 1920, h: 122 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header10',
    name: '头部10',
    src: getImgUrl('header10.png'),
    attr: { w: 947, h: 58 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header11',
    name: '头部11',
    src: getImgUrl('header11.png'),
    attr: { w: 1920, h: 27 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header12',
    name: '头部12',
    src: getImgUrl('header12.png'),
    attr: { w: 5115, h: 115 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header13',
    name: '头部13',
    src: getImgUrl('header13.png'),
    attr: { w: 1920, h: 76 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header14',
    name: '头部14',
    src: getImgUrl('header14.png'),
    attr: { w: 1876, h: 58 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header15',
    name: '头部15',
    src: getImgUrl('header15.png'),
    attr: { w: 361, h: 29 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header16',
    name: '头部16',
    src: getImgUrl('header16.png'),
    attr: { w: 671, h: 71 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header17',
    name: '头部17',
    src: getImgUrl('header17.png'),
    attr: { w: 428, h: 18 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header18',
    name: '头部18',
    src: getImgUrl('header18.png'),
    attr: { w: 1320, h: 80 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header19',
    name: '头部19',
    src: getImgUrl('header19.png'),
    attr: { w: 311, h: 60 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
  {
    id: 'header20',
    name: '头部20',
    src: getImgUrl('header20.png'),
    attr: { w: 466, h: 48 },
    css: { 'background-position': 'center', 'background-size': 'contain' },
  },
]