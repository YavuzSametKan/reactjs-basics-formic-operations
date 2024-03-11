# Reactjs Temel Formik İşlemleri

### Formik Nedir, Neden Kullanılır?

Formik, React uygulamalarında form yönetimi için kullanılan bir kütüphanedir. Formik, form işlemlerini kolaylaştıran birçok özellik ve yardımcı işlev sunar. Bazı temel özellikleri şunlardır:

1. **Form Durumu Yönetimi:** Formik, formdaki girdi değerlerini, geçerlilik durumunu ve diğer form durumlarını yönetmek için bir konteynır sağlar. Böylece, form verilerini tek bir yerde tutabilirsiniz.
2. **Form Geçerliliği ve Doğrulama:** Formik, formun geçerliliğini izlemek ve form alanlarını doğrulamak için kolay bir yapı sunar. Bu, girdilerin doğruluğunu kontrol etmek ve gerekirse kullanıcıya geri bildirim sağlamak için kullanışlıdır.
3. **Form Gönderimi ve Validasyonu:** Formik, formun gönderilmesini ve gönderim öncesindeki ek işlemleri yönetmek için işlevsellik sağlar. Bu, sunucuya veri göndermeden önce veri doğrulaması ve ön işleme gibi adımları gerçekleştirmenize olanak tanır.
4. **Dokunulabilirlik ve Erişilebilirlik:** Formik, dokunulabilir ve erişilebilir form deneyimleri oluşturmayı kolaylaştırır. Örneğin, girdi alanlarına odaklanma, klavye gezinimi ve ekran okuyucu uyumluluğu gibi özellikler üzerinde odaklanır.

### React'te Formik Kullanmanın Avantajları

1. **Daha Düzenli Kod:** Form işlemleri, Formik gibi özel bir kütüphane kullanılarak daha düzenli ve sade bir şekilde yönetilebilir. Formik, geliştiricilere form durumunu ve işlemlerini tek bir yerde toplamalarını sağlar, bu da kodun daha okunabilir ve sürdürülebilir olmasını sağlar.
2. **Performans ve Verimlilik:** Formik, performansı artırmak ve gereksiz yeniden render işlemlerini önlemek için optimize edilmiştir. Bu, büyük ve karmaşık form yapılarında bile hızlı ve verimli bir kullanıcı deneyimi sağlar.
3. **Kolay Doğrulama ve Geçerlilik Kontrolü:** Formik, form alanlarını doğrulamak ve geçerliliğini izlemek için kolay bir arayüz sunar. Bu, kullanıcıların doğru verileri girmesini sağlamak için önemlidir ve aynı zamanda form işlemlerini daha güvenli hale getirir.
4. **Genişletilebilirlik:** Formik, genişletilebilir bir yapıya sahiptir ve ihtiyaca göre özelleştirilebilir. Bu, özel form işlemleri ve gereksinimler için kolayca genişletilebilir bir çözüm sunar.

Bu nedenlerden dolayı, React uygulamalarında form işlemleri için Formik sıklıkla tercih edilen bir kütüphanedir.

### Basitçe Formik Kütüphanesinin Kullanımı

Formik kütüphanesini React projesine eklemelisiniz.
   
npm için:
```
npm install formik
```
yarn için:
```
yarn add formik
```

Ardından, bir form bileşeni oluşturarak Formik'i kullanmaya başlayabilirsiniz. Örneğin, bir kullanıcı kayıt formunu ele alalım:

```jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const onSubmit = (values) => {
  console.log(values); // Form verilerini konsola yazdırır, gerçek uygulamada bu verileri sunucuya gönderebilirsiniz.
};

const validate = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = 'Kullanıcı adı zorunludur';
  }

  if (!values.email) {
    errors.email = 'E-posta zorunludur';
  }

  if (!values.password) {
    errors.password = 'Şifre zorunludur';
  }

  return errors;
};

const MyForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validate={validate}
  >
    <Form>
      <div>
        <label htmlFor="username">Kullanıcı Adı</label>
        <Field type="text" id="username" name="username" />
        <ErrorMessage name="username" component="div" />
      </div>

      <div>
        <label htmlFor="email">E-posta</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />
      </div>

      <div>
        <label htmlFor="password">Şifre</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />
      </div>

      <button type="submit">Gönder</button>
    </Form>
  </Formik>
);

export default MyForm;
```
Bu örnekte, Formik'in sunduğu Formik, Form, Field, ve ErrorMessage bileşenlerini kullanarak bir form oluşturduk.

1. **Formik bileşeni**, formun genel durumunu yönetir ve formun başlangıç değerlerini, gönderim işlemlerini ve doğrulama işlemlerini yönetir.
2. **Form bileşeni**, bir form alanı kümesini temsil eder ve içindeki alanların değerlerini takip eder.
3. **Field bileşeni**, form alanlarını oluşturur ve bu alanların değerlerini yönetir.
4. **Error Message bileşeni**, form alanlarının doğrulama hatalarını görüntüler.

Bu şekilde, Formik kullanarak kolayca form işlemlerini yönetebilir ve geliştirebilirsiniz.

### Formik'i HTML Form Etiketleri ile Kullanmak

Formik ile kendi HTML form etiketlerinizi kullanmak oldukça basittir. Formik, form yönetimi için bir konteynır sağlar ve bu formun içinde herhangi bir HTML form etiketini kullanabilirsiniz. Bu işlemi yapmak için 2 yöntem mevcuttur ikisinden birini tercih edebilirsiniz. Hangisini tercih etmek istediğiniz size kalmıştır.

### 1. YÖNTEM (Formik Component'ı ile)

#### Adım 1: Gerekli Paketleri İçe Aktarın
İlk adımda, Formik paketlerini projenize eklemeniz gerekir. Bu adımı gerçekleştirmek için proje dizininizde terminali açın ve şu komudu çalıştırın:

 ```
 npm install formik
 ```

#### Adım 2: Formik Konteynırını Oluşturun
Form etiketlerini Formik ile yönetmek için `Formik` bileşenini kullanacağız. İlk olarak, `Formik` bileşenini içe aktarın ve ardından HTML form etiketlerini içeren bir bileşen oluşturun.

```jsx
import React from 'react';
import { Formik } from 'formik';

function Contact() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }}
            onSubmit={(values) => { // Form submit edilince olacak işlemler
                console.log(values)
            }}
        >
            {/* Form içeriği buraya gelecek */}
        </Formik>
    )
}

export default Contact;
```

#### Adım 3: Form Alanlarını Oluşturun
Form alanlarını oluşturmak için HTML form etiketlerini kullanabilirsiniz. Ancak, form submit olduğunda reaksiyon sağlaması için form etiketinin `onSubmit` olayına Formik tarafından sağlanan `handleSubmit` fonksiyonunu vermelisiniz. Bir de `onChange` olayı ile değerleri güncellemek için Formik tarafından sağlanan `handleChange` fonksiyonunu kullanmalısınız.

```jsx
import React from 'react'
import {Formik} from 'formik'

function Contact() {
   return (
       <Formik
           initialValues={{
               firstName: '',
               lastName: '',
               email: '',
               message: ''
           }}
           onSubmit={(values) => { // Form submit edilince olacak işlemler
               console.log(values)
           }}
       >
           {({handleSubmit, handleChange}) => (
           <form onSubmit={handleSubmit}>
               <input
                   name="firstName"
                   type="text"
                   placeholder="İsim"
                   onChange={handleChange('firstName')}
               />
               <input
                   name="lastName"
                   type="text"
                   placeholder="Soyisim"
                   onChange={handleChange('lastName')}
               />
               <input
                   name="email"
                   type="text"
                   placeholder="E-mail"
                   onChange={handleChange('email')}
               />
               <textarea
                   name="message"
                   placeholder="Mesaj"
                   onChange={handleChange('message')}
               />
               <button type="submit">Gönder</button>
           </form>
           )}
       </Formik>
   )
}

export default Contact
```

### 2. YÖNTEM (useFormik Hook'u ile)

#### Adım 1: Gerekli Paketleri İçe Aktarın
İlk adımda, Formik paketlerini projenize eklemeniz gerekir. Bu adımı gerçekleştirmek için proje dizininizde terminali açın ve şu komudu çalıştırın:

 ```
 npm install formik
 ```

#### Adım 2: Formik Konteynırını Oluşturun
Form etiketlerini Formik ile yönetmek için `useFormik` hook'unu kullanacağız. İlk olarak, `useFormik` hook'unu içe aktarın ve form objesini oluşturun.

```jsx
import React from 'react';
import { useFormik } from 'formik';

function Contact() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        onSubmit: values => { // Form submit edilince olacak işlemler
            console.log(values);
        }
    });

    return (
        {/* Form içeriği buraya gelecek */}
    );
}

export default Contact;
```

#### Adım 3: Form Alanlarını Oluşturun
Form alanlarını oluşturmak için HTML form etiketlerini kullanabilirsiniz. Ancak, form submit olduğunda reaksiyon sağlaması için form etiketinin `onSubmit` olayına Formik tarafından sağlanan `handleSubmit` fonksiyonunu vermelisiniz. Bir de `onChange` olayı ile değerleri güncellemek için Formik tarafından sağlanan `handleChange` fonksiyonunu kullanmalısınız.

```jsx
import React from 'react';
import { useFormik } from 'formik';

function Contact() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="firstName"
                type="text"
                placeholder="İsim"
                onChange={formik.handleChange}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Soyisim"
                onChange={formik.handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={formik.handleChange}
            />
            <textarea
                name="message"
                placeholder="Mesaj"
                onChange={formik.handleChange}
            />
            <button type="submit">Gönder</button>
        </form>
    );
}

export default Contact;
```

Bu şekilde, Formik ile HTML form etiketlerini kullanarak form işlemlerini yönetebilirsiniz.

## Açıklama

[Formik Official Docs](https://formik.org/docs/overview)

[Currently Live Demo](https://yavuzsametkan.github.io/reactjs-basics-formik-operations/)

The learning process continues...
