import React from 'react';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import {View, Image, ScrollView} from 'react-native';
import {Card, Left, List, ListItem, Right, Switch, Text} from 'native-base';

import styled from './style';
import color from '../../assets/color';

import avatar from '../../assets/user.png';

export default function FriendInfo() {
  return (
    <View style={styled.parent}>
      <ScrollView>
        <View style={styled.headerWrapper}>
          <Image style={styled.image} source={avatar} resizeMethod="scale" />
          <Text style={styled.name}>Name</Text>
        </View>
        <Card>
          <List>
            <ListItem>
              <Left>
                <Text>Bisukan notifikasi</Text>
              </Left>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Notifikasi khusus</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Tampilkan notifikasi</Text>
              </Left>
            </ListItem>
          </List>
        </Card>
        <Card>
          <List>
            <ListItem>
              <Left>
                <View>
                  <Text>Pesan sementara</Text>
                  <Text style={styled.info} note>
                    Mati
                  </Text>
                </View>
              </Left>
              <Right>
                <IconMi name="av-timer" size={25} color={color.title} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <View>
                  <Text style={styled.info}>Enkripsi</Text>
                  <Text style={styled.info} note>
                    Pesan dan panggilan terenkripsi secara end-to-end. Ketuk
                    untuk memverifikasi.
                  </Text>
                </View>
              </Left>
              <Right>
                <IconMi name="lock" size={25} color={color.title} />
              </Right>
            </ListItem>
          </List>
        </Card>
        <Card>
          <List>
            <Text style={styled.title}>Nomor telepon</Text>
            <ListItem>
              <Left>
                <View>
                  <Text>081272011951</Text>
                  <Text style={styled.info} note>
                    Ponsel
                  </Text>
                </View>
              </Left>
              <Right>
                <View style={styled.iconWrapper}>
                  <IconMi name="chat" size={25} color={color.title} />
                  <IconMi name="phone" size={25} color={color.title} />
                  <IconMi name="videocam" size={25} color={color.title} />
                </View>
              </Right>
            </ListItem>
          </List>
        </Card>
        <Card>
          <List>
            <ListItem>
              <View style={styled.actionWrapper}>
                <IconMi name="block" size={25} color="red" />
                <Text style={styled.action}>Blokir</Text>
              </View>
            </ListItem>
          </List>
        </Card>
        <Card>
          <List>
            <ListItem>
              <View style={styled.actionWrapper}>
                <IconMi name="thumb-down" size={25} color="red" />
                <Text style={styled.action}>Laporkan kontak</Text>
              </View>
            </ListItem>
          </List>
        </Card>
      </ScrollView>
    </View>
  );
}
