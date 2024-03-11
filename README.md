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

### `useFormik` Hook'unun Detayları
#### values niteliği
Normal olarak useFormik hook'unu kullandığımız zaman inputlarımıza initial value vermek istediğimizde bu işlemin başarısız olduğunu göreceksinizdir. Burada yarıma `values` niteliği koşuyor.

Kullanım: 
```jsx
import { useFormik } from 'formik'

function Contact() {
    const {
            handleSubmit,
            handleChange,
            values, //👈 destructing ile values niteliğini hook'umuzdan alıyoruz
        } = useFormik({
        initialValues: {
            firstName: 'Yavuz Samet',
            lastName: 'Kan',
            email: 'yssk.personal@gmail.com',
            message: 'Hello, World!'
        },
        onSubmit: async (values, bag) => {
            console.log(values)
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <input
                name='firstName'
                type='text'
                onChange={handleChange('firstName')}
                value={values.firstName} //👈 input'un value değerine values objesinin altındaki uygun niteliği seçiyoruz. 
            />
            ...
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Contact
```
Bu şekilde sizlerde inputlarınıza initial değerler verebilirsiniz.

#### Kullanıcı Form'u Submit Ettiğinde Bir Sonraki İşlem İçin İlk İşlemin Bitmesini Bekletmek (isSubmitting)
Bu kısmı yaşadığım bir örnek ile açıklamak isterim. Evimizin internet faturasını ödemek için sağlayıcı firmamızın ürettiği ödeme paneline girip kart bilgilerimi girmiştim ve form'u submit etmiştim. İşlem uzun sürdü ve hata olduğunu düşünüp formu tekrar submit ettim ve işlem ikinci submitten sonra tamamlanmıştı. Daha sonrasında bankacılık uygulamasına girince hesamından 2 kere aynı ücretin tahsil edilmiş olduğunu gördüm. ÇOK SİNİR BOZUCU BİR BUG. Eminim sizlerde bu hatayı ya yaşamışsınızdır ya da yaşayacaksınızdır. Gelin biz bu hatayı kullanıcılarımıza yaşatmamak ve kanser etmemek için `isSubmitting` niteliğini öğrenelim.

Kullanım:
```jsx
import { useFormik } from 'formik'

function Contact() {
    const {
            handleSubmit,
            handleChange,
            values,
            isSubmitting //👈 destructing ile isSubmiting niteliğini hook'umuzdan alıyoruz
        } = useFormik({
        initialValues: {
            firstName: 'Yavuz Samet',
            lastName: 'Kan',
            email: 'yssk.personal@gmail.com',
            message: 'Hello, World!'
        },
        onSubmit: async (values, bag) => {
            console.log(values)
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <input
                name='firstName'
                type='text'
                onChange={handleChange('firstName')}
                value={values.firstName}
                disabled={isSubmitting} //👈 form submitting durumundayken input'u disable ediyoruz.
            />
            ...
            <button
                type='submit'
                disabled={isSubmitting} //👈 form submitting durumundayken butonu disable ediyoruz.
            >
                Submit
            </button>
        </form>
    )
}

export default Contact
```
Bu şekilde insanların form submit edilirken formu tekrar tekrar submit etmelerini, form üzerinde değişiklik yapmalarını engelleyebilir, insanları hatalı kodunuzla uğraşmaktan kurtarabilirsiniz. :)  

### Form Submit Edildiğinde Form'u Resetlemek

Bu işlem için `bag` parametresini kullanıyoruz. 

Kullanım:
```jsx
const formik = useFormik({
    ...
    onSubmit: async (values, bag) => {
        bag.resetForm()//👈 Submit işleminden sonra formu yenilemek
    }
    ...
})
```

### Form Validasyon'u

Bu aşamada formik ile tam uyumlu olan [**yup**](https://github.com/jquense/yup) paketini kullanacağız.

İsterseniz örnek üzerinden nasıl yapılacağına bakalım:

#### 1. Adım yup paketini projeye kurun

```
npm i yup
```

#### 2. Adım Validasyon Yapınızı Kodlayın

Ben bu aşamada okunurluğu arttırmak için bulunduğum dizine validations.js isimli bir dosya oluşturacağım ve bu dosyaya tüm validation yapımı yazacağım.

Kodları ve yorum satırlarını incelemenizin anlamanız için yeterli olacağını düşünüyorum.

validation.js içeriği:
```jsx
import { object, string, number } from 'yup'

const REQUIRED_MESSAGE = 'Bu alan zorunludur!' //👈 zorunlu alan mesajım

const contactSchema = object({
    firstName: string().required(REQUIRED_MESSAGE), //👈 fonksiyonların içine kendi hata mesajlarınızı yazabilirsiniz
    lastName: string().required(REQUIRED_MESSAGE),  // yazmazsanız varsayılan olarak ingilizce hata mesajları verecektir.
    age: number()
            .positive('Negatif olamaz!')
            .integer('Tam sayı girin!')
            .max(125, 'Maksimum 125 olabilir!')
            .required(REQUIRED_MESSAGE),
    email: string().email('Geçerli bir e-mail değil!').required(REQUIRED_MESSAGE),
    message: string().min(25, 'Minimum 25 karakter!').max(500, 'Maksimum 500 karakter!').required(REQUIRED_MESSAGE)
})

export default contactSchema
```

### 3. Adım Yazdığınız Yapıyı Form'da Kullanın

Kodları ve yorum satırlarını incelemenizin anlamanız için yeterli olacağını düşünüyorum.


Kullanım:
```jsx
import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validations' //👈 validations.js dosyasından contactSchema objesini validationSchema isminde import ediyoorum.

function Contact() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema //👈 useFormik objesinde validationSchema'yı kullanıyorum.
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='input-errMsg-container'>
                <input
                    name='firstName'
                    type='text'
                    onChange={formik.handleChange('firstName')}
                    value={formik.values.firstName}
                    disabled={formik.isSubmitting}
                    onBlur={formik.handleBlur} //👈 input'ta bir kere odaklanıp odak bozunca bu bilgiyi formik'e iletir.
                />
                {//👇 firstName input'unda hata varsa ve bu input'ta onBlur event'ı tetiklenirse error mesajını div içinde yaz.
                    formik.errors.firstName && formik.touched.firstName &&
                    <div className='text-red-700'>
                        {formik.errors.firstName}
                    </div>
                }
            </div>
            ...
            <button
                type='submit'
                disabled={formik.isSubmitting} //👈 form submitting durumundayken butonu disable ediyoruz.
            >
                Submit
            </button>
        </form>
    )
}

export default Contact
```

Bu şekilde sizlerde formlarınıza validation kontolü yazabilirsiniz.

### Backend'den Gelen Verileri Kontorol Edip Submit İşlemini Engellemek

Bu aşamayı simüle etmek için elbette backend anlatmayacağım. Bir email array'i oluşturup içerisine halihazırda kayıtlı olduğu için bir daha kayıt yaptıramayacak email'leri koyacağız. Bu email sahiplerini ikinci kayıt denemelerinde uyaracağız.

Hadi Başlayalım:

```jsx
import {useFormik} from 'formik'
import validationSchema from './validations'
function Register() {
    const formik = useFormik({
        ...
        onSubmit: async (values, bag) => {
            const registeredEmails = [ //👈 Kayıtlı email'ler array'i
                'yssk.personal@gmail.com',
                'yssk32000@gmail.com'
            ]
            if(registeredEmails.includes(formik.values.email)){ //👈 Girilen email'in bu email'lerden biri olup olmadığının kontrolü
                return bag.setErrors( //👈 Eğer bu email'lerden biriyse, email niteliğine error'u yerleştir.
                    {
                        email: 'Bu e-mail adresi zaten kullanılıyor.'
                    }
                )
            }
            bag.resetForm() // form'u submit işleminden sonra resetler.
        },
        validationSchema
    })

    return (
            <form onSubmit={handleSubmit}>
                ...
                <div className='input-errorMsg-container'> //👈 örnek bir input error message kullanımı
                    <input
                        id='email'
                        name='email'
                        type="email"
                        placeholder='email'
                        className={`border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200
                                   ${errors.email && touched.email && 'ring-1 ring-red-700'}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        disabled={isSubmitting}
                    />
                    {errors.email && touched.email &&
                        <div className='text-red-700'>
                            {errors.email}
                        </div>
                    }
                </div>
                ...
                <button
                    className='border border-gray-600 rounded p-4 hover:bg-gray-200 transition font-bold disabled:bg-gray-200'
                    type='submit'
                    disabled={isSubmitting}
                >
                    Submit
                </button>
            </form>
)
}

export default Register
```
Bu şekilde backend'den gelen verilerinizi kontrol edip ona göre submit işlemini onaylayabilirsiniz.

### Kaynak ve Linkler

Öğrenirken yazdığım uygumanın [live demo'su](https://yavuzsametkan.github.io/reactjs-basics-formik-operations/)

Formik Pakedinin [Resmi Dokümantasyonu](https://formik.org/docs/overview)

Yup Pakedinin [Resmi Dokümantasyonu](https://github.com/jquense/yup)