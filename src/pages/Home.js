import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    image: require("../assets/8c9e6fbe4978be3387d7b68741986339.jpeg"),
    title: "Big 4 Auditor Financial Analyst",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: { name: "Jenna Ortega", role: "Senior Accountant di Gojek" },
    rating: { value: 3.5, count: 86 },
    price: "Rp 300K",
  },
  {
    id: 2,
    image: require("../assets/8c9e6fbe4978be3387d7b68741986339.jpeg"),
    title: "Data Analyst untuk Pemula",
    description: "Pelajari dasar-dasar analisis data menggunakan Excel dan SQL...",
    instructor: { name: "Dita Aulia", role: "Data Analyst di Tokopedia" },
    rating: { value: 4.2, count: 102 },
    price: "Rp 250K",
  },
  // Tambah data course sesuai kebutuhan
];

function Home() {
  return (
    <>
      <Header showCategory />
      <section className="hero bg-light p-5 text-center">
        <Container>
          <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran
            berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan
            interaktif yang akan meningkatkan pemahaman Anda.
          </p>
          <Button variant="success" size="lg">
            Temukan Video Course-mu di videobelajar!
          </Button>
        </Container>
      </section>

      <section className="kategori text-center my-5">
        <Container>
          <h2>Koleksi Video Pembelajaran Unggulan</h2>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Materi Terverifikasi</p>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <Button variant="outline-primary" active>
              Semua Kelas
            </Button>
            <Button variant="outline-primary">Pemasaran</Button>
            <Button variant="outline-primary">Desain</Button>
            <Button variant="outline-primary">Pengembangan Diri</Button>
            <Button variant="outline-primary">Bisnis</Button>
          </div>
        </Container>
      </section>

      <section className="cards py-4">
        <Container>
          <Row>
            {courses.map((course) => (
              <Col md={4} key={course.id}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="newsletter-section bg-light py-5 text-center">
        <Container>
          <p className="text-uppercase text-muted mb-2">NEWSLETTER</p>
          <h2>Mau Belajar Lebih Banyak?</h2>
          <p className="mb-4">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br />
            penawaran spesial dari program-program terbaik hariesok.id
          </p>
          <form className="d-flex justify-content-center align-items-center gap-2 flex-wrap" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              required
              className="form-control"
              style={{ maxWidth: 320 }}
            />
            <Button type="submit" variant="success" style={{ minWidth: 120 }}>
              Subscribe
            </Button>
          </form>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Home;