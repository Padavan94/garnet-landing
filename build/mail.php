<?php
echo $_POST['name'];
echo $_POST['phone'];



		$from = $_POST['mail'];
		$to .= "padavan94@gmail.com, hakigama@gmail.com, webmarketingua@gmail.com";
		$subject = "garnet-soft - lp";
		$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
					Калькулятор
						<table>
							<tbody>
								<tr>
									<td style="width: 100px;">Имя:</td>
									<td>'.$_POST['name'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Телефон:</td>
									<td>'.$_POST['phone'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Тип сайта:</td>
									<td>'.$_POST['site_type'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Тип дизайна:</td>
									<td>'.$_POST['design_type'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Сообщение:</td>
									<td>'.$_POST['message'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Тип продвижения:</td>
									<td>'.$_POST['promotion22'].','.$_POST['promotion33'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Выбранный менеджер:</td>
									<td>'.$_POST['group2'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Страница, с котой пришла заявка:</td>
									<td>'.$_POST['location'].'</td>
								</tr>

							</tbody>
						</table>                  
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги;
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= "From:" . $from;
		mail($to,$subject,$message, $headers);
	
?>