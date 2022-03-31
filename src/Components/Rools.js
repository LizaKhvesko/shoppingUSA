import React from 'react';
import styled from 'styled-components';

const RoolsBlock = styled.section`
    padding: 40px;
    border: 3px solid #fbec5d;
    margin: 0 40px;
`

const Text = styled.div`
    text-align: justify;
    line-height: 25px;
`

const CenterText = styled.p`
    text-align: center;
`

export const Rools = () => (
   <RoolsBlock>
       <Text>
        <CenterText> Добро пожаловать в  “Стильные вместе”! </CenterText>
        <p>Собираем заказы на различные покупки из магазинов Америки (Carter’s, 6pm, Childrensplace, H&M, Disney, Oldnavy, Gap  и тд), а также Англия (Sportdirect, George, Mango  и тд.).</p>

        <p>ОФОРМЛЕНИЕ ЗАКАЗА: фамилия + ссылка+размер+ цвет+цена+ можно добавить фото. После того как сделан заказ НЕ ИЗМЕНЯЕМ его через функцию вайбера о редактировании. Любые изменения в заказе вносятся через НОВОЕ СООБЩЕНИЕ. 
            Удаление заказа - также новое сообщение с ссылкой на заказ и словом “ОТМЕНА”
            Пример заказа: [ссылка], цвет red, размер 6-9 мес, 10$ -20%, Иванова.</p>

        <p>Условия заказа для Америки: цена сайта - скидка (если есть) + 8% орг.сбор + 22$ за кг.
        Условия заказа для Англии: цена сайта - скидка (если есть)*1,42(перевод с фунтов в уе) + 8% орг.сбор + 20$ за кг.</p>
        <p>При выставлении счета вес будет посчитан ПРИБЛИЗИТЕЛЬНО, окончательный перерасчет после получения посылки!
        Добавление в группу новых участников через ЛС организаторов!
        Оплата в течение 5 дней после выставления счета. Очень желательна оплата наличными, много вариантов пересечения в городе. Также возможна оплата на карты. После оплаты подтверждение в виде скрина в ЛС.
        Доставка товара: самовывоз + европочта. Давайте будем стильными вместе!</p>

       </Text>
   </RoolsBlock>
)