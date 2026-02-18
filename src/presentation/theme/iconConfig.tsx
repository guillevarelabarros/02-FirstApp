import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';

export const IconProvider = (props: IconProps) => <Icon {...props} />;

// Mapeo de iconos de Material Design a Ionicons
export const iconMapping: Record<string, string> = {
  // Navegación
  'arrow-left': 'arrow-back',
  'arrow-right': 'arrow-forward',
  'chevron-left': 'chevron-back',
  'chevron-right': 'chevron-forward',
  'chevron-down': 'chevron-down',
  'chevron-up': 'chevron-up',
  'menu': 'menu',
  'close': 'close',
  
  // Acciones
  'plus': 'add',
  'minus': 'remove',
  'check': 'checkmark',
  'refresh': 'refresh',
  'delete': 'trash',
  'edit': 'create',
  'search': 'search',
  'filter': 'filter',
  'settings': 'settings',
  
  // Contenido
  'heart': 'heart',
  'heart-outline': 'heart-outline',
  'star': 'star',
  'star-outline': 'star-outline',
  'share': 'share-social',
  'download': 'download',
  'upload': 'cloud-upload',
  
  // Comunicación
  'email': 'mail',
  'phone': 'call',
  'message': 'chatbubble',
  'bell': 'notifications',
  
  // Media
  'play': 'play',
  'pause': 'pause',
  'stop': 'stop',
  'camera': 'camera',
  'image': 'image',
  
  // Otros
  'home': 'home',
  'person': 'person',
  'calendar': 'calendar',
  'location': 'location',
  'lock': 'lock-closed',
  'unlock': 'lock-open',
  'eye': 'eye',
  'eye-off': 'eye-off',
};

export const getIoniconName = (name: string): string => {
  return iconMapping[name] || name;
};
